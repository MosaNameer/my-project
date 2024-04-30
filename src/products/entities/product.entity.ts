import { Category } from "src/categories/entities/category.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
@Entity('Products')
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'name', length: 100, nullable: false})
    name: string;
    
    
    @Column({ name: 'imageUrl', nullable: false })
    imageUrl: string;

    @Column({ name: 'description', length: 100, nullable: false })
    description: string;

    @Column({ name: 'price', nullable: false })
    price: number;

    @Column({ name: 'quantity', nullable: false })
    quantity: number;

    @ManyToOne(() => Category, category => category.products)
    category: Relation<Category>;
}

