import { injectable } from 'inversify';
import { createConnection, getManager, Repository } from 'typeorm';

import { Config } from '../config/Config';

import { Issue } from '../models/Issue';
import { Photo } from '../models/Photo';
import { User } from '../models/User';

export interface IssueRepository {
    create(issue: Issue): Promise<Issue>;
    createPhoto(photo: Photo): Promise<Photo>;
    getAll(from: number): Promise<Issue[]>;
    getAllInProximity(from: number, centerX: number, centerY: number, km: number): Promise<Issue[]>;
    getById(id: number): Promise<Issue>;
    getPhotoById(id: number): Promise<Photo>;
    getByUser(user: User): Promise<Issue[]>;
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
            .leftJoinAndSelect('i.votes', 'votes')
            .leftJoinAndSelect('votes.user', 'voteUser')
            .leftJoinAndSelect('i.comments', 'comments')
            .skip(from)
            .take(30)
            .getMany();
    }

    public async getAllInProximity(from: number, lat: number, long: number, km: number): Promise<Issue[]> {
        return await this.issueRepository
            .createQueryBuilder('i')
            .leftJoinAndSelect('i.location', 'location')
            .leftJoinAndSelect('i.photos', 'photo')
            .leftJoinAndSelect('i.comments', 'comments')
            .leftJoin('comments.user', 'commentUser')
            .addSelect('commentUser.name')
            .leftJoinAndSelect('i.user', 'user')
            .leftJoinAndSelect('i.votes', 'votes')
            .leftJoin('votes.user', 'voteUser')
            .addSelect('voteUser.name')
            .leftJoinAndSelect('votes.user', 'u')
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

    public async getById(id: number): Promise<Issue> {
        return await this.issueRepository
            .createQueryBuilder('i')
            .where('i.id = :id', { id })
            .leftJoinAndSelect('i.location', 'location')
            .leftJoinAndSelect('i.photos', 'photo')
            .leftJoinAndSelect('i.comments', 'comments')
            .leftJoin('comments.user', 'commentUser')
            .addSelect('commentUser.name')
            .leftJoin('i.user', 'user')
            .addSelect('user.name')
            .leftJoinAndSelect('i.votes', 'votes')
            .leftJoin('votes.user', 'voteUser')
            .addSelect('voteUser.name')
            .leftJoinAndSelect('votes.user', 'u')
            .orderBy('comments.createdAt', 'DESC')
            .getOne();
    }

    public async getByUser(user: User): Promise<Issue[]> {
        return await this.issueRepository
            .createQueryBuilder('i')
            .leftJoinAndSelect('i.location', 'location')
            .leftJoinAndSelect('i.photos', 'photo')
            .leftJoinAndSelect('i.comments', 'comments')
            .leftJoin('comments.user', 'commentUser')
            .addSelect('commentUser.name')
            .leftJoin('i.user', 'user')
            .where('user.id = :id', { id: user.id })
            .addSelect('user.name')
            .leftJoinAndSelect('i.votes', 'votes')
            .leftJoin('votes.user', 'voteUser')
            .addSelect('voteUser.name')
            .leftJoinAndSelect('votes.user', 'u')
            .orderBy('comments.createdAt', 'DESC')
            .getMany();
    }

}
