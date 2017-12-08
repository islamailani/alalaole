import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Location } from './Location';

export enum Gender {
    Male, Female
}

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public email: string;

    @Column()
    public name: string;

    @OneToOne((type) => Location, (location) => location.user)
    public location: Location;

    @Column()
    public radius: number;

    @Column()
    public age: number;

    @Column()
    public gender: Gender;
}
