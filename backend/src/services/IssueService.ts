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
    getIssuesInProximityOfUser(from: number, user: User): Promise<Issue[]>;
    getIssuesInProximity(from: number, lat: number, long: number, km: number): Promise<Issue[]>;
    getIssue(id: number): Promise<Issue>;
    getPhoto(id: number): Promise<Photo>;
    getUserIssues(user: User): Promise<Issue[]>;
    verifyIssueForArchiving(issue: Issue): Promise<boolean>;
    archiveIssue(issue: Issue): Promise<void>;
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

    public async getIssuesInProximityOfUser(from: number = 0, user: User): Promise<Issue[]> {
        return await this.issueRepository.getAllInProximity(0, user.location.latitude, user.location.longitude, user.radius);
    }

    public async getIssuesInProximity(from: number = 0, lat: number, long: number, km: number): Promise<Issue[]> {
        return await this.issueRepository.getAllInProximity(0, lat, long, km);
    }

    public async getIssue(id: number): Promise<Issue> {
        return await this.issueRepository.getById(id);
    }

    public async getUserIssues(user: User): Promise<Issue[]> {
        return await this.issueRepository.getByUser(user);
    }

    public async verifyIssueForArchiving(issue: Issue): Promise<boolean> {
        issue = await this.getIssue(issue.id);
        const upvotes = issue.votes.filter((vote) => vote.score === 1).length;
        const downvotes = issue.votes.filter((vote) => vote.score === -1).length;
        const shouldArchive = (downvotes * 2 > upvotes) || (downvotes === 2 && upvotes === 0);
        if (shouldArchive) {
            this.archiveIssue(issue);
        }
        return shouldArchive;
    }

    public async archiveIssue(issue: Issue): Promise<void> {
        issue.archived = true;
        await this.issueRepository.create(issue);
        return;
    }
}
