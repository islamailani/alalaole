import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Issue } from './Issue';

@Entity()
export class IssueLocation {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column('double precision')
    public longitude: number;

    @Column('double precision')
    public latitude: number;

    @OneToOne((type) => Issue, (issue) => issue.location)
    public issue: Issue;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    public createdAt: Date;
}
