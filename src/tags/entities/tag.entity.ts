import { SharedEntity } from "src/database/shared.entity";
import { Product } from "src/products/entities/product.entity";
import { Column, Entity, Index, JoinTable, ManyToMany } from "typeorm";

@Entity('Tags')
export class Tag extends SharedEntity{
    @Column({ length: 100 })
    name: string;

    @Index()
    @Column({ type: 'boolean', default: true , comment: 'Is the tag active?'})
    isActive: boolean

    // @ManyToMany(() => Product, product => product.tags)
    // products: Product[];

}
