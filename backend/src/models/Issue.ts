import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { IssueLocation } from './IssueLocation';
import { Photo } from './Photo';

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
}
