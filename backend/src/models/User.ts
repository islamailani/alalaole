import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Issue } from './Issue';
import { UserLocation } from './UserLocation';

export enum Gender {
    Male, Female
}

export enum Role {
    User, Admin
}

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public password: string;

    @Column()
    public email: string;

    @Column()
    public name: string;

    @OneToOne((type) => UserLocation, (location) => location.user,
        {
            cascadeInsert: true
        })
    @JoinColumn()
    public location: UserLocation;

    @Column()
    public radius: number;

    @Column()
    public age: number;

    @Column()
    public gender: Gender;

    @Column({ nullable: true })
    public token?: string;

    @Column({ default: 0 })
    public role: Role;

    @OneToMany((type) => Issue, (issue) => issue.user)
    public issues: Issue[];

    constructor(
        password: string,
        email: string,
        name: string,
        location: UserLocation,
        radius: number,
        age: number,
        gender: Gender) {
        this.password = password;
        this.email = email;
        this.name = name;
        this.location = location;
        this.radius = radius;
        this.age = age;
        this.gender = gender;
    }
}
