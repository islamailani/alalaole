import * as express from 'express';
import { inject, injectable } from 'inversify';
import * as multer from 'multer';
import * as uuid from 'uuid';

import TYPES from '../types';
import { Controller } from './Controller';

import authorize from '../middlewares/AuthorizationMiddleware';

import { Issue } from '../models/Issue';
import { Photo } from '../models/Photo';

import { IssueService } from '../services/IssueService';

@injectable()
export class IssueController implements Controller {
    private issueService: IssueService;

    constructor( @inject(TYPES.IssueService) issueService: IssueService) {
        this.issueService = issueService;
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
            .post(upload.array('photos', 12), async (req: express.Request, res: express.Response, next: express.NextFunction) => {
                const photosCreated: Array<Promise<Photo>> = [];
                const files = req.files as Express.Multer.File[];
                for (const file of files) {
                    photosCreated.push(this.issueService.savePhoto(file.filename));
                }
                res.send((await Promise.all(photosCreated)).map((photo) => photo.id));
            });
        app.route('/issues')
            .get(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
                let issues = [];
                if (req.user) {
                    issues = await this.issueService.getIssues(0);
                } else {
                    issues = await this.issueService.getIssuesInProximity(0, req.user);
                }
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
                const photosCreated: Array<Promise<Photo>> = [];
                photos.forEach((id: number) => {
                    photosCreated.push(this.issueService.getPhoto(id));
                });
                issue.photos = await Promise.all(photosCreated);
                const createdIssue = await this.issueService.createIssue(issue);
                res.send({ message: 'Created', status: 200 });
            });
        app.route('/issues/:id')
            .get(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
                const issue = this.issueService.getIssue(req.params.id);
                res.send(issue);
            });
        app.route('/issues/:id/upvote')
            .post(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
                const issue = await this.issueService.getIssue(req.params.id);
                // const
                // if (issue.user === req.user) {

                // }
                res.send(issue);
            });
        app.route('/issues/:id/downvote')
            .post(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
                const issue = this.issueService.getIssue(req.params.id);
                res.send(issue);
            });
    }
}
