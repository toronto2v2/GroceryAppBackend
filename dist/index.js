"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const datasource_1 = require("./datasource/datasource");
const express_1 = __importDefault(require("express"));
const get_products_1 = require("../src/routes/get_products");
const get_grocery_1 = require("../src/routes/get_grocery");
const update_grocery_1 = require("../src/routes/update_grocery");
const delete_grocery_1 = require("./routes/delete_grocery");
require("dotenv/config");
const app = (0, express_1.default)();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield datasource_1.connection.initialize();
        app.use(express_1.default.json());
        app.use([
            get_products_1.getProductsRouter,
            get_grocery_1.getGroceryRouter,
            update_grocery_1.updateGroceryRouter,
            delete_grocery_1.deleteGroceryRouter,
        ]);
        app.listen(process.env.PORT, () => {
            console.log("Now running on port 8080");
        });
    }
    catch (error) {
        console.warn("CONNECTION TO DB FAILED", error);
    }
});
main();
//# sourceMappingURL=index.js.map