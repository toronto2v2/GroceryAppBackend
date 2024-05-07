"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = exports.ProductsTypes = void 0;
const typeorm_1 = require("typeorm");
var ProductsTypes;
(function (ProductsTypes) {
    ProductsTypes["Fruit"] = "fruit";
    ProductsTypes["Vegetable"] = "vegetable";
})(ProductsTypes || (exports.ProductsTypes = ProductsTypes = {}));
let Products = class Products extends typeorm_1.BaseEntity {
};
exports.Products = Products;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Products.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        unique: true,
        type: "text",
    }),
    __metadata("design:type", String)
], Products.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint"),
    __metadata("design:type", Number)
], Products.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: ProductsTypes,
    }),
    __metadata("design:type", String)
], Products.prototype, "type", void 0);
exports.Products = Products = __decorate([
    (0, typeorm_1.Entity)("products")
], Products);
//# sourceMappingURL=Products.entity.js.map