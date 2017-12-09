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
        return await this.voteRepository.save(vote);
    }
}
