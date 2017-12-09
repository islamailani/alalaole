import * as express from 'express';
import { inject, injectable } from 'inversify';

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
        app.route('/issues')
            .post(authorize, async (req: express.Request, res: express.Response, next: express.NextFunction) => {
                const issue = new Issue(
                    req.body.title,
                    req.body.description,
                    req.body.location
                );
                issue.user = req.user;
                const photos: string[] = req.body.photos;
                const createdIssue = await this.issueService.createIssue(issue);
                const photosCreated: Array<Promise<Photo>> = [];
                photos.forEach((photo: string) => {
                    photosCreated.push(this.issueService.savePhoto(photo, issue));
                });
                await Promise.all(photosCreated);
                res.send({ message: 'Created', status: 200 });
            });
    }
}
