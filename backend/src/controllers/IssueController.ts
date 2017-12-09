import * as express from 'express';
import { inject, injectable } from 'inversify';
import * as multer from 'multer';
import * as uuid from 'uuid';

import TYPES from '../types';
import { Controller } from './Controller';

import authorize from '../middlewares/AuthorizationMiddleware';

import { Issue, VoteStatus } from '../models/Issue';
import { Photo } from '../models/Photo';

import { IssueService } from '../services/IssueService';
import { VoteService } from '../services/VoteService';
import { HttpError } from '../utils/HttpError';

@injectable()
export class IssueController implements Controller {
    private issueService: IssueService;
    private voteService: VoteService;

    constructor(
        @inject(TYPES.IssueService) issueService: IssueService,
        @inject(TYPES.VoteService) voteService: VoteService) {
        this.issueService = issueService;
        this.voteService = voteService;
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
                        issue.voteStatus = issue.votes.find((vote) => vote.user.id === req.user.id).score;
                    } else {
                        issue.score = 0;
                        issue.voteStatus = VoteStatus.NotVoted;
                    }
                    delete issue.votes;
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
                const issue = this.issueService.getIssue(req.params.id).catch((err) => next(err));
                res.send(issue);
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
                }
            });
    }
}
