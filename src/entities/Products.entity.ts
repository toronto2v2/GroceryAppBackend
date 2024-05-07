import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export enum ProductsTypes {
  Fruit = "fruit",
  Vegetable = "vegetable",
}

@Entity("products")
export class Products extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: "text",
  })
  name: string;

  @Column("smallint")
  price: number;

  @Column({
    type: "enum",
    enum: ProductsTypes,
  })
  type: string;
}
