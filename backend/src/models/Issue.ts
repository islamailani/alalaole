import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Comment } from './Comment';
import { IssueLocation } from './IssueLocation';
import { Photo } from './Photo';
import { User } from './User';
import { Vote } from './Vote';

export enum VoteStatus {
    DownVote = -1, NotVoted = 0, Upvoted = 1
}

@Entity()
export class Issue {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public title: string;

    @Column()
    public description: string;

    @OneToMany((type) => Vote, (vote) => vote.issue)
    public votes: Vote[];

    @OneToMany((type) => Photo, (photo) => photo.issue)
    public photos: Photo[];

    @OneToMany((type) => Comment, (comment) => comment.issue)
    public comments: Comment[];

    @OneToOne((type) => IssueLocation, (location) => location.issue,
        {
            cascadeInsert: true
        })
    @JoinColumn()
    public location: IssueLocation;

    @ManyToOne((type) => User, (user) => user.issues)
    public user: User;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    public createdAt: Date;

    public score: number;

    public voteStatus: VoteStatus;

    public commentNumber: number;

    constructor(title: string, description: string, location: IssueLocation) {
        this.title = title;
        this.description = description;
        this.location = location;
    }
}
