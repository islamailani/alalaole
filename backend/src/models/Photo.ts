
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Issue } from './Issue';

@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public path: string;

    @ManyToOne((type) => Issue, (issue) => issue.photos)
    public issue: Issue;

    constructor(path: string) {
        this.path = path;
    }
}
