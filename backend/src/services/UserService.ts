import { inject, injectable } from 'inversify';

import { User } from '../models/User';
import { UserRepositoryImplDb } from '../repository/UserRepository';
import TYPES from '../types';

import * as bcrypt from 'bcrypt-nodejs';
import { HttpError } from '../utils/HttpError';

export interface UserService {
    createUser(user: User): Promise<User>;
}

@injectable()
export class UserServiceImpl implements UserService {
    @inject(TYPES.UserRepository)
    private userRepository: UserRepositoryImplDb;

    public async createUser(user: User): Promise<User> {
        if (await this.userRepository.findByEmail(user.email)) {
            throw new HttpError('User already existent', 400);
        }
        user.password = bcrypt.hashSync(user.password);
        const newUser = await this.userRepository.create(user);
        return newUser;
    }
}
