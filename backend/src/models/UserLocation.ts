import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from './User';

@Entity()
export class UserLocation {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column('double precision')
    public longitude: number;

    @Column('double precision')
    public latitude: number;

    @OneToOne((type) => User, (user) => user.location)
    public user: User;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    public createdAt: Date;
}
