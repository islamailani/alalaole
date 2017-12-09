import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Issue } from './Issue';
import { User } from './User';

@Entity()
export class Vote {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public score: number;

    @OneToOne((type) => User, (user) => user.votes)
    @JoinColumn()
    public user: User;

    @OneToOne((type) => Issue, (issue) => issue.votes)
    @JoinColumn()
    public issue: Issue;
}
