import { SharedEntity } from "src/database/shared.entity";
import { Product } from "src/products/entities/product.entity";
import { Column, Entity, Index, OneToMany , Relation } from "typeorm";
 
@Entity('categories')
export class Category extends SharedEntity {

    @Column({length: 100 })
    name: string;
    
    @Column()
    imageUrl: string;

    @Column({ nullable: true })
    description?: string;

    @Index()
    @Column({ type: 'boolean', default: true , comment: 'Is the category active?'})
    isActive: boolean

    @OneToMany(() => Product, product => product.category, { cascade: true })
    products: Relation<Product[]>;
}
