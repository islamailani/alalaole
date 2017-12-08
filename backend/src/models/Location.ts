import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from './User';

@Entity()
export class Location {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column('double')
    public longitude: number;

    @Column('double')
    public latitude: number;

    @OneToOne((type) => User, (user) => user.location)
    @JoinColumn()
    public user: User;

}
