import * as express from 'express';
import { inject, injectable } from 'inversify';
import * as multer from 'multer';
import * as uuid from 'uuid';

import TYPES from '../types';
import { Controller } from './Controller';

import authorize from '../middlewares/AuthorizationMiddleware';

import { Comment } from '../models/Comment';
import { Issue, VoteStatus } from '../models/Issue';
import { Photo } from '../models/Photo';

import { BroadcastingService, SubscriptionType } from '../services/BroadcastingService';
import { CommentService } from '../services/CommentService';
import { IssueService } from '../services/IssueService';
import { VoteService } from '../services/VoteService';
import { HttpError } from '../utils/HttpError';

@injectable()
export class IssueController implements Controller {
    private issueService: IssueService;
    private voteService: VoteService;
    private commentService: CommentService;
    private broadcastingService: BroadcastingService;

    constructor(
        @inject(TYPES.IssueService) issueService: IssueService,
        @inject(TYPES.VoteService) voteService: VoteService,
        @inject(TYPES.CommentService) commentService: CommentService,
        @inject(TYPES.BroadcastingService) broadcastingService: BroadcastingService) {
        this.issueService = issueService;
        this.voteService = voteService;
        this.commentService = commentService;
        this.broadcastingService = broadcastingService;
    }

    public register(app: express.Application): void {
        const fileFilter = (req: express.Request, file: Express.Multer.File, cb) => {
            const isImage = file.mimetype.startsWith('image/');
            cb(null, (isImage));
        };

        const storage = multer.diskStorage({
            destination: (req: express.Request, file: Express.Multer.File, cb) => {
                cb(null, __dirname + '/../../public/images');
            },
            filename: (req: express.Request, file: Express.Multer.File, cb) => {
                cb(null, uuid.v4() + '.jpeg');
            }
        });

        const upload = multer({ storage, fileFilter });

        app.route('/issues/photo/upload')
            .post([authorize, upload.array('photos', 12)], async (req: express.Request, res: express.Response, next: express.NextFunction) => {
                const photosCreated: Array<Promise<Photo>> = [];
                const files = req.files as Express.Multer.File[];
                for (const file of files) {
                    photosCreated.push(this.issueService.savePhoto(file.filename));
                }
                res.send((await Promise.all(photosCreated)).map((photo) => photo.id));
            });
        app.route('/issues')
            .get(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
                let issues: Issue[] = [];
                if (!req.user) {
                    issues = await this.issueService.getIssues(0);
                } else {
                    // issues = await this.issueService.getIssuesInProximity(0, req.user);
                    issues = await this.issueService.getIssues(0);
                }

                issues.map((issue) => {
                    if (issue.votes.length > 0) {
                        issue.score = issue.votes.reduce((acc, current) => acc += current.score, 0);
                        const userVote = issue.votes.find((vote) => vote.user.id === req.user.id);
                        issue.voteStatus = userVote ? userVote.score : VoteStatus.NotVoted;
                    } else {
                        issue.score = 0;
                        issue.voteStatus = VoteStatus.NotVoted;
                    }
                    if (issue.comments.length > 0) {
                        issue.commentNumber = issue.comments.length;
                    } else {
                        issue.commentNumber = 0;
                    }
                    delete issue.votes;
                    delete issue.comments;
                    return issues;
                });
                res.send(issues);
            })
            .post(authorize, async (req: express.Request, res: express.Response, next: express.NextFunction) => {
                const issue = new Issue(
                    req.body.title,
                    req.body.description,
                    req.body.location
                );
                issue.user = req.user;
                const photos: number[] = req.body.photos;
                const photosCreated: Array<Promise<Photo | void>> = [];
                photos.forEach((id: number) => {
                    photosCreated.push(this.issueService.getPhoto(id));
                });
                const photoPromise = await Promise.all(photosCreated).catch((err) => next(err));
                if (photoPromise) {
                    issue.photos = photoPromise as Photo[];
                }
                const createdIssue = await this.issueService.createIssue(issue).catch((err) => next(err));
                res.send({ message: 'Created', status: 200 });
            });
        app.route('/issues/:id')
            .get(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
                const issue = await this.issueService.getIssue(req.params.id).catch((err) => next(err));
                if (issue) {
                    if (issue.votes.length > 0) {
                        issue.score = issue.votes.reduce((acc, current) => acc += current.score, 0);
                        const userVote = issue.votes.find((vote) => vote.user.id === req.user.id);
                        issue.voteStatus = userVote ? userVote.score : VoteStatus.NotVoted;
                    } else {
                        issue.score = 0;
                        issue.voteStatus = VoteStatus.NotVoted;
                    }
                    if (issue.comments.length > 0) {
                        issue.commentNumber = issue.comments.length;
                    } else {
                        issue.commentNumber = 0;
                    }
                    delete issue.votes;
                    res.send(issue);
                } else {
                    res.status(404).send({ message: 'Not Found', status: 404 });
                }
            });
        app.route('/issues/:id/upvote')
            .post(authorize, async (req: express.Request, res: express.Response, next: express.NextFunction) => {
                const issue = await this.issueService.getIssue(req.params.id).catch((err) => next(err));
                if (issue) {
                    if (issue.user.id === req.user.id) {
                        next(new HttpError('You canot vote on your own issue', 400));
                    } else {
                        await this.voteService.upVoteIssue(req.user, issue).catch((err) => next(err));
                        res.send({ message: 'Ok', status: 200 });
                    }
                }
            });
        app.route('/issues/:id/downvote')
            .post(authorize, async (req: express.Request, res: express.Response, next: express.NextFunction) => {
                const issue = await this.issueService.getIssue(req.params.id).catch((err) => next(err));
                if (issue) {
                    if (issue.user.id === req.user.id) {
                        next(new HttpError('You canot vote on your own issue', 400));
                    } else {
                        await this.voteService.downVoteIssue(req.user, issue).catch((err) => next(err));
                        res.send({ message: 'Ok', status: 200 });
                    }
                } else {
                    res.send({ message: 'Not Found', status: 404 });
                }
            });
        app.route('/issues/:id/comments')
            .post(authorize, async (req: express.Request, res: express.Response, next: express.NextFunction) => {
                const issue = await this.issueService.getIssue(req.params.id).catch((err) => next(err));
                if (issue) {
                    const comment = new Comment(req.body.text);
                    comment.user = req.user;
                    comment.issue = issue;
                    const createdComment = await this.commentService.addComment(comment).catch((err) => next(err)) as Comment;
                    this.broadcastingService.broadcastToSubscribers(SubscriptionType.Comments, issue.id, JSON.stringify(createdComment));
                    res.send({ id: createdComment.id, text: createdComment.text });
                } else {
                    res.send({ message: 'Not Found', status: 404 });
                }
            });
    }
}
