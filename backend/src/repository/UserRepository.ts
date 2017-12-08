import { injectable } from 'inversify';
import { createConnection, Repository } from 'typeorm';

import { Config } from '../config/Config';

import { Location } from '../models/Location';
import { User } from '../models/User';

export interface UserRepository {
    create(user: User): Promise<User>;
    findByEmail(email: string): Promise<User>;
}

@injectable()
export class UserRepositoryImplDb implements UserRepository {
    private userRepository: Repository<User>;
    private locationRepository: Repository<Location>;

    constructor() {
        createConnection(Config.ConnectionOptions).then(async (connection) => {
            this.userRepository = connection.getRepository(User);
            this.locationRepository = connection.getRepository(Location);
        });
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
}
