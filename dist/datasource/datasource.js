"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const Grocery_entity_1 = require("../entities/Grocery.entity");
const Products_entity_1 = require("../entities/Products.entity");
const typeorm_1 = require("typeorm");
require("dotenv/config");
exports.connection = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? +process.env.DB_PORT : undefined,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "typeorm",
    logging: true,
    entities: [Products_entity_1.Products, Grocery_entity_1.Grocery],
    synchronize: true,
});
//# sourceMappingURL=datasource.js.map