import { injectable } from 'inversify';
import { createConnection, getManager, Repository } from 'typeorm';

import { Config } from '../config/Config';

import { Issue } from '../models/Issue';
import { Photo } from '../models/Photo';

export interface IssueRepository {
    create(issue: Issue): Promise<Issue>;
    createPhoto(photo: Photo): Promise<Photo>;
    getAll(from: number): Promise<Issue[]>;
    getAllInCircle(from: number, centerX: number, centerY: number, radius: number);
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

    public async getAll(from: number): Promise<Issue[]> {
        return await this.issueRepository
            .createQueryBuilder('i')
            .leftJoinAndSelect('i.photos', 'photo')
            .leftJoinAndSelect('i.location', 'location')
            .skip(from)
            .take(30)
            .getMany();
    }

    public async getAllInCircle(from: number, centerX: number, centerY: number, radius: number) {
        return await this.issueRepository
            .createQueryBuilder('i')
            .leftJoinAndSelect('i.location', 'location')
            .leftJoinAndSelect('i.photos', 'photo')
            .where('((location.latitude - :centerX)^2 + (location.longitude - :centerY)^2) < :radius ^ 2', { centerX, centerY, radius })
            .skip(from)
            .take(30)
            .getMany();
    }

}
