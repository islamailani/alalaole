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

import { Comment } from '../models/Comment';
import { CommentRepository } from '../repository/CommentRespository';

export interface CommentService {
    addComment(comment: Comment): Promise<Comment>;
    updateComment(comment: Comment): Promise<Comment>;
    removeComment(comment: Comment): Promise<void>;
}

@injectable()
export class CommentServiceImpl implements CommentService {
    @inject(TYPES.CommentRepository)
    private commentRepository: CommentRepository;

    public async addComment(comment: Comment): Promise<Comment> {
        return await this.commentRepository.create(comment);
    }

    public async updateComment(comment: Comment): Promise<Comment> {
        return await this.commentRepository.update(comment);
    }
    public async removeComment(comment: Comment): Promise<void> {
        return await this.commentRepository.delete(comment);
    }
}
