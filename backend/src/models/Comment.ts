import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Issue } from './Issue';
import { User } from './User';
import { Vote } from './Vote';

@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    public id?: number;

    @Column()
    public text: string;

    @ManyToOne((type) => User, (user) => user.comments)
    public user: User;

    @ManyToOne((type) => Issue, (issue) => issue.comments)
    public issue: Issue;

    constructor(text: string) {
        this.text = text;
    }
}
