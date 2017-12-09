import { injectable } from 'inversify';
import { createConnection, Repository, getManager } from 'typeorm';

import { Config } from '../config/Config';

import { Issue } from '../models/Issue';
import { Photo } from '../models/Photo';

export interface IssueRepository {
    create(issue: Issue): Promise<Issue>;
    createPhoto(photo: Photo): Promise<Photo>;
}

@injectable()
export class IssueRepositoryImplDb implements IssueRepository {
    private photoRepository: Repository<Photo>;
    private issueRepository: Repository<Issue>;

    constructor() {
        this.photoRepository = getManager().getRepository(Photo);
        this.issueRepository = getManager().getRepository(Issue);
    }

    public async create(issue: Issue): Promise<Issue> {
        return await this.issueRepository.save(issue);
    }

    public async createPhoto(photo: Photo): Promise<Photo> {
        return await this.photoRepository.save(photo);
    }

}
