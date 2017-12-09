import * as bcrypt from 'bcrypt-nodejs';
import * as fs from 'fs';
import { inject, injectable } from 'inversify';
import * as uuid from 'uuid';

import TYPES from '../types';
import { HttpError } from '../utils/HttpError';

import { Issue } from '../models/Issue';
import { Photo } from '../models/Photo';
import { User } from '../models/User';

import { IssueRepository } from '../repository/IssueRepository';

export interface IssueService {
    createIssue(issue: Issue): Promise<Issue>;
    savePhoto(base64Photo: string, issue: Issue): Promise<Photo>;
    getIssues(from?: number, user?: User): Promise<Issue[]>;
}

@injectable()
export class IssueServiceImpl implements IssueService {
    @inject(TYPES.IssueRepository)
    private issueRepository: IssueRepository;

    public async createIssue(issue: Issue): Promise<Issue> {
        return await this.issueRepository.create(issue);
    }

    public async savePhoto(base64Photo: string, issue: Issue): Promise<Photo> {
        const matches = base64Photo.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);

        if (matches.length !== 3) {
            throw new Error('Invalid input string');
        }

        const name = uuid.v4();
        const extension = matches[1].replace('image/', '');
        const fileName = `${name}.${extension}`;
        const photoData = new Buffer(matches[2], 'base64');
        fs.appendFileSync(__dirname + `/../../public/images/${fileName}`, photoData);

        const photo = new Photo(`/public/images/${fileName}`);
        photo.issue = issue;
        return await this.issueRepository.createPhoto(photo);
    }

    public async getIssues(from: number = 0, user?: User): Promise<Issue[]> {
        if (!user) {
            return await this.issueRepository.getAll(from);
        } else {
            return await this.issueRepository.getAllInCircle(0, user.location.latitude, user.location.longitude, user.radius);
        }
    }
}
