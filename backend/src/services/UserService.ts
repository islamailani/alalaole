import { inject, injectable } from 'inversify';

import { User } from '../models/User';
import { UserRepositoryImplDb } from '../repository/UserRepository';
import TYPES from '../types';

import * as bcrypt from 'bcrypt-nodejs';
import { logger } from '../utils/Logger';

export interface UserService {
    createUser(user: User): Promise<User>;
}

@injectable()
export class UserServiceImpl implements UserService {
    @inject(TYPES.UserRepository)
    private userRepository: UserRepositoryImplDb;

    public async createUser(user: User): Promise<User> {
        user.password = bcrypt.hashSync(user.password);
        const newUser = await this.userRepository.create(user);
        return newUser;
    }
}
