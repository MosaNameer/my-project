import { SharedEntity } from "src/database/shared.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('categories')
export class Category{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({name: 'name', length: 100, nullable: false})
    name: string;
    
    
    @Column({ name: 'imageUrl', nullable: false })
    imageUrl: string;

    @Column({ name: 'description', length: 100, nullable: false })
    description: string;
}
