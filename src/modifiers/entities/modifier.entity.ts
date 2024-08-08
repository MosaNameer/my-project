import { SharedEntity } from "src/database/shared.entity";
import { Product } from "src/products/entities/product.entity";
import { Column, JoinTable, ManyToMany } from "typeorm";

export class Modifier extends SharedEntity {

    @Column({ length: 100 })
    name: string;

    @Column({ type: 'real' })
    price: number;

    @ManyToMany(() => Product, product => product.modifiers, { cascade: true })
    @JoinTable()
    products: Product[];

}
