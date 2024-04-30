import { SharedEntity } from "src/database/shared.entity";
import { Product } from "src/products/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation } from "typeorm";

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

    @OneToMany(() => Product, product => product.category)
    products: Relation<Product[]>;
}
