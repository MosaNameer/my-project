import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({name: 'name', length: 100, nullable: false})
    name: string;
    
    
    @Column({name: 'age', nullable: false, default: 18})
    age: number;

    @Column({name: 'email', length: 100, unique: true, nullable: true})
    email: string;
}
