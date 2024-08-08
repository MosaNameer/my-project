// import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
// import { Product } from "./product.entity";
// import { Modifier } from "src/modifiers/entities/modifier.entity";
// import { SharedEntity } from "src/database/shared.entity";

// @Entity('product_modifiers')
// export class ProductModifier{

//   @PrimaryGeneratedColumn()
//   public id: number;

//   @ManyToOne(() => Product, product => product.id)
//   product: Product;

//   @ManyToOne(() => Modifier, modifier => modifier.id)
//   modifier: Modifier;
// }
