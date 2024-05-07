import { Grocery } from "../entities/Grocery.entity";
import { Products } from "../entities/Products.entity";
import { DataSource } from "typeorm";
import "dotenv/config";

export const connection = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? +process.env.DB_PORT : undefined,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: "typeorm",
  logging: true,
  entities: [Products, Grocery],
  synchronize: true,
});
