import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { IssueLocation } from './IssueLocation';
import { Photo } from './Photo';
import { User } from './User';

@Entity()
export class Issue {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public title: string;

    @Column()
    public description: string;

    @OneToMany((type) => Photo, (photo) => photo.issue)
    public photos: Photo[];

    @OneToOne((type) => IssueLocation, (location) => location.issue,
        {
            cascadeInsert: true
        })
    @JoinColumn()
    public location: IssueLocation;

    @ManyToOne((type) => User, (user) => user.issues)
    public user: User;

    constructor(title: string, description: string, location: IssueLocation) {
        this.title = title;
        this.description = description;
        this.location = location;
    }
}
