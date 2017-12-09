import * as bcrypt from 'bcrypt-nodejs';
import * as fs from 'fs';
import { inject, injectable } from 'inversify';
import * as uuid from 'uuid';

import TYPES from '../types';
import { HttpError } from '../utils/HttpError';

import { Issue } from '../models/Issue';
import { Photo } from '../models/Photo';
import { User } from '../models/User';
import { Vote } from '../models/Vote';

import { IssueRepository } from '../repository/IssueRepository';

export interface IssueService {
    createIssue(issue: Issue): Promise<Issue>;
    savePhoto(path: string): Promise<Photo>;
    getIssues(from?: number): Promise<Issue[]>;
    getIssuesInProximity(from: number, user: User): Promise<Issue[]>;
    getIssue(id: number): Promise<Issue>;
    getPhoto(id: number): Promise<Photo>;
}

@injectable()
export class IssueServiceImpl implements IssueService {
    @inject(TYPES.IssueRepository)
    private issueRepository: IssueRepository;

    public async createIssue(issue: Issue): Promise<Issue> {
        return await this.issueRepository.create(issue);
    }

    public async savePhoto(fileName: string): Promise<Photo> {
        const photo = new Photo(`/public/images/${fileName}`);
        return await this.issueRepository.createPhoto(photo);
    }

    public async getPhoto(id: number): Promise<Photo> {
        return await this.issueRepository.getPhotoById(id);
    }

    public async getIssues(from: number = 0): Promise<Issue[]> {
        return await this.issueRepository.getAll(from);
    }

    public async getIssuesInProximity(from: number = 0, user: User): Promise<Issue[]> {
        return await this.issueRepository.getAllInProximity(0, user.location.latitude, user.location.longitude, user.radius);
    }

    public async getIssue(id: number): Promise<Issue> {
        return await this.issueRepository.getById(id);
    }
}
