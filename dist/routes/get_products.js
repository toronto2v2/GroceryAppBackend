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
exports.getProductsRouter = void 0;
const express_1 = __importDefault(require("express"));
const Products_entity_1 = require("../entities/Products.entity");
const datasource_1 = require("../datasource/datasource");
const router = express_1.default.Router();
exports.getProductsRouter = router;
router.get("/api/get-products", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productList = yield datasource_1.connection.getRepository(Products_entity_1.Products).find();
    return res.send(productList).status(200);
}));
//# sourceMappingURL=get_products.js.map