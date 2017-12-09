import * as bcrypt from 'bcrypt-nodejs';
import { inject, injectable } from 'inversify';
import * as uuid from 'uuid';

import TYPES from '../types';
import { HttpError } from '../utils/HttpError';

import { LoginDetails } from '../models/LoginDetails';
import { User } from '../models/User';

import { Issue } from '../models/Issue';
import { Vote } from '../models/Vote';
import { VoteRepository } from '../repository/VoteRepository';

export interface VoteService {
    upVoteIssue(user: User, issue: Issue): Promise<Vote>;
    downVoteIssue(user: User, Issue: Issue): Promise<Vote>;
}

@injectable()
export class VoteServiceImpl implements VoteService {
    @inject(TYPES.VoteRepository)
    private voteRepository: VoteRepository;

    public async upVoteIssue(user: User, issue: Issue): Promise<Vote> {
        const vote = new Vote();
        vote.user = user;
        vote.issue = issue;
        vote.score = 1;
        return await this.voteRepository.save(vote).catch((err) => { throw err; });
    }

    public async downVoteIssue(user: User, issue: Issue): Promise<Vote> {
        const vote = new Vote();
        vote.user = user;
        vote.issue = issue;
        vote.score = -1;
        return await this.voteRepository.save(vote).catch((err) => { throw err; });
    }
}
