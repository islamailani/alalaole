import * as bcrypt from 'bcrypt-nodejs';
import { inject, injectable } from 'inversify';
import * as uuid from 'uuid';

import TYPES from '../types';
import { HttpError } from '../utils/HttpError';

import { LoginDetails } from '../models/LoginDetails';
import { User } from '../models/User';

import { UserRepository } from '../repository/UserRepository';

export interface UserService {
    createUser(user: User): Promise<User>;
    loginUser(user: User): Promise<User>;
    findByToken(token: string): Promise<User>;
    logOutUser(user: User): Promise<void>;
    getAdmins(): Promise<User[]>;
}

@injectable()
export class UserServiceImpl implements UserService {
    @inject(TYPES.UserRepository)
    private userRepository: UserRepository;

    public async createUser(user: User): Promise<User> {
        if (await this.userRepository.findByEmail(user.email)) {
            throw new HttpError('User already existent', 409);
        }
        user.password = bcrypt.hashSync(user.password);
        const newUser = await this.userRepository.create(user);
        delete newUser.password;
        return newUser;
    }

    public async loginUser(user: User): Promise<User> {
        const foundUser = await this.userRepository.findByEmail(user.email);
        if (foundUser) {
            if (foundUser.approved) {
                if (bcrypt.compareSync(user.password, foundUser.password)) {
                    const token = this.generateToken();
                    foundUser.token = token;
                    const loggedUser = await this.userRepository.update(foundUser);
                    delete loggedUser.password;
                    return loggedUser;
                } else {
                    throw new HttpError('Wrong credentials', 401);
                }
            } else {
                throw new HttpError('Account not approved', 400);
            }
        } else {
            throw new HttpError('Wrong credentials', 401);
        }
    }
    public async findByToken(token: string): Promise<User> {
        const user = await this.userRepository.findByToken(token);
        return user ? user : null;
    }

    public async logOutUser(user: User): Promise<void> {
        return await this.userRepository.removeToken(user);
    }

    public async getAdmins(): Promise<User[]> {
        return await this.userRepository.findAdmins();
    }

    private generateToken(): string {
        return uuid.v4();
    }
}
