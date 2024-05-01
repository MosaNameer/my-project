import { Category } from "src/categories/entities/category.entity";
import { SharedEntity } from "src/database/shared.entity";
import { Column, Entity, Index, ManyToOne, Relation } from "typeorm";
@Entity('Products')
export class Product extends SharedEntity {

    @Column({ length: 100 })
    name: string;
    
    @Column()
    imageUrl: string;

    @Column({ type:'varchar', length: 100, nullable: true })
    description?: string;

    @Column({ type: 'real' })
    price: number;

    @Index()
    @Column({ type: 'boolean', default: true , comment: 'Is the product active?'})
    isActive: boolean

    @Column({ type: 'int' })
    quantity: number;

    @ManyToOne(() => Category, category => category.products)
    category: Relation<Category>;
}

