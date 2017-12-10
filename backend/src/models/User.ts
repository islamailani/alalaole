import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Comment } from './Comment';
import { Issue } from './Issue';
import { UserLocation } from './UserLocation';
import { Vote } from './Vote';

export enum Gender {
    Male, Female
}

export enum Role {
    User, Admin
}

export enum ApprovalStatus {
    Pending, Approved, Dissaprove
}

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    public id?: number;

    @Column()
    public password?: string;

    @Column()
    public email?: string;

    @Column()
    public name?: string;

    @OneToOne((type) => UserLocation, (location) => location.user,
        {
            cascadeInsert: true,
            cascadeUpdate: true
        })
    @JoinColumn()
    public location?: UserLocation;

    @Column('double precision')
    public radius?: number;

    @Column()
    public age?: number;

    @Column()
    public gender?: Gender;

    @Column({ nullable: true })
    public token?: string;

    @Column({ default: 0 })
    public role?: Role;

    @OneToMany((type) => Issue, (issue) => issue.user)
    public issues?: Issue[];

    @OneToMany((type) => Vote, (vote) => vote.user)
    public votes?: Vote[];

    @OneToMany((type) => Comment, (comment) => comment.issue)
    public comments?: Comment[];

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    public createdAt?: Date;

    @Column({ default: ApprovalStatus.Pending })
    public approvalStatus?: ApprovalStatus;

    constructor(
        password: string,
        email: string,
        name?: string,
        location?: UserLocation,
        radius?: number,
        age?: number,
        gender?: Gender) {
        this.password = password;
        this.email = email;
        this.name = name;
        this.location = location;
        this.radius = radius;
        this.age = age;
        this.gender = gender;
    }

    public toNameObject(): User {
        return Object.create({ name: this.name });
    }
}
