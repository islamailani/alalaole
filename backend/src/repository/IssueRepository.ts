import { injectable } from 'inversify';
import { createConnection, getManager, Repository } from 'typeorm';

import { Config } from '../config/Config';

import { Issue } from '../models/Issue';
import { Photo } from '../models/Photo';

export interface IssueRepository {
    create(issue: Issue): Promise<Issue>;
    createPhoto(photo: Photo): Promise<Photo>;
    getAll(from: number): Promise<Issue[]>;
    getAllInProximity(from: number, centerX: number, centerY: number, km: number): Promise<Issue[]>;
    getById(id: number): Promise<Issue>;
    getPhotoById(id: number): Promise<Photo>;
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

    public async getPhotoById(id: number): Promise<Photo> {
        return await this.photoRepository.findOneById(id);
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

    public async getAllInProximity(from: number, lat: number, long: number, km: number) {
        return await this.issueRepository
            .createQueryBuilder('i')
            .leftJoinAndSelect('i.location', 'location')
            .leftJoinAndSelect('i.photos', 'photo')
            .where(`
                (acos(
                    sin(radians(location.latitude))
                     * sin(radians(:lat))
                     + cos(radians(location.latitude))
                     * cos(radians(:lat))
                     * cos(radians(:long) - (radians(location.longitude))))
                     * 6371
                ) < :km`, { lat, long, km })
            .skip(from)
            .take(30)
            .getMany();
    }

    public async getById(id: number) {
        return await this.issueRepository.findOneById(id, { relations: ['user'] });
    }

}
