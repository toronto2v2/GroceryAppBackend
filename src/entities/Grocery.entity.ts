import { Column, Entity } from "typeorm";
import { Products } from "./Products.entity";

@Entity("grocery")
export class Grocery extends Products {
  @Column("smallint")
  quantity: number;
}
