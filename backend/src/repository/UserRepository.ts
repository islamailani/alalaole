import { injectable } from 'inversify';
import { createConnection, getManager, Repository } from 'typeorm';

import { Config } from '../config/Config';

import { ApprovalStatus, User } from '../models/User';
import { UserLocation } from '../models/UserLocation';

export interface UserRepository {
    save(user: User): Promise<User>;
    findByEmail(email: string): Promise<User>;
    update(user: User): Promise<User>;
    findByToken(token: string): Promise<User>;
    findById(id: number): Promise<User>;
    removeToken(user: User): Promise<void>;
    findAdmins(): Promise<User[]>;
    findPendingApproval(): Promise<User[]>;
}

@injectable()
export class UserRepositoryImplDb implements UserRepository {
    private userRepository: Repository<User>;
    private locationRepository: Repository<UserLocation>;

    constructor() {
        this.userRepository = getManager().getRepository(User);
        this.locationRepository = getManager().getRepository(UserLocation);
    }

    public async save(user: User): Promise<User> {
        if (user.location) {
            const location = await this.locationRepository.save(user.location);
            user.location = location;
        }
        const newUser = await this.userRepository.save(user);
        return newUser;
    }

    public async findByEmail(email: string): Promise<User> {
        return await this.userRepository.findOne({ where: { email }, relations: ['location'] });
    }

    public async update(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }

    public async findByToken(token: string): Promise<User> {
        return await this.userRepository.findOne({ where: { token }, relations: ['location'] });
    }

    public async findById(id: number): Promise<User> {
        return await this.userRepository.findOne({ id });
    }

    public async removeToken(user: User): Promise<void> {
        user.token = null;
        await this.userRepository.save(user);
    }

    public async findAdmins(): Promise<User[]> {
        return await this.userRepository.find({ role: 1 });
    }

    public async findPendingApproval(): Promise<User[]> {
        return await this.userRepository.find({ where: { approvalStatus: ApprovalStatus.Pending }, relations: ['location'] });
    }
}
