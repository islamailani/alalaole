import { injectable } from 'inversify';
import { createConnection, getManager, Repository } from 'typeorm';

import { Config } from '../config/Config';

import { User } from '../models/User';
import { UserLocation } from '../models/UserLocation';

export interface UserRepository {
    create(user: User): Promise<User>;
    findByEmail(email: string): Promise<User>;
    update(user: User): Promise<User>;
    findByToken(token: string): Promise<User>;
}

@injectable()
export class UserRepositoryImplDb implements UserRepository {
    private userRepository: Repository<User>;
    private locationRepository: Repository<UserLocation>;

    constructor() {
        this.userRepository = getManager().getRepository(User);
        this.locationRepository = getManager().getRepository(UserLocation);
    }

    public async create(user: User): Promise<User> {
        const location = await this.locationRepository.save(user.location);
        user.location = location;
        const newUser = await this.userRepository.save(user);
        return newUser;
    }

    public async findByEmail(email: string): Promise<User> {
        return await this.userRepository.findOne({ email });
    }

    public async update(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }

    public async findByToken(token: string): Promise<User> {
        return await this.userRepository.findOne({ token });
    }
}
