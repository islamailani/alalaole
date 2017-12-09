import { injectable } from 'inversify';
import { createConnection, getManager, Repository } from 'typeorm';

import { Config } from '../config/Config';

import { User } from '../models/User';
import { UserLocation } from '../models/UserLocation';
import { Vote } from '../models/Vote';

export interface VoteRepository {
    save(vote: Vote): Promise<Vote>;
}

@injectable()
export class VoteRepositoryImpl implements VoteRepository {
    private voteRepository: Repository<Vote>;

    constructor() {
        this.voteRepository = getManager().getRepository(Vote);
    }

    public async save(vote: Vote): Promise<Vote> {
        const foundVote = await this.voteRepository.findOne({ where: { issue: vote.issue.id, user: vote.user.id }, relations: ['user', 'issue'] });
        if (foundVote) {
            foundVote.score = vote.score;
            console.log(foundVote);
            return await this.voteRepository.save(foundVote);
        } else {
            return await this.voteRepository.save(vote);
        }
    }
}
