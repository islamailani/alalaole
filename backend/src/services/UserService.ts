import * as bcrypt from 'bcrypt-nodejs';
import { inject, injectable } from 'inversify';
import * as uuid from 'uuid';

import TYPES from '../types';
import { HttpError } from '../utils/HttpError';

import { LoginDetails } from '../models/LoginDetails';
import { User } from '../models/User';

import { UserRepositoryImplDb } from '../repository/UserRepository';

export interface UserService {
    createUser(user: User): Promise<User>;
    loginUser(user: User): Promise<LoginDetails>;
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

    public async loginUser(user: User): Promise<LoginDetails> {
        const foundUser = await this.userRepository.findByEmail(user.email);
        if (foundUser) {
            if (bcrypt.compareSync(user.password, foundUser.password)) {
                const token = this.generateToken();
                foundUser.token = token;
                await this.userRepository.update(foundUser);
                return new LoginDetails(token);
            } else {
                throw new HttpError('Wrong credentials !', 403);
            }
        } else {
            throw new HttpError('Wrong credentials !', 403);
        }
    }

    private generateToken(): string {
        return uuid.v4();
    }
}
