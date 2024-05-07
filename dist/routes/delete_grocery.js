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
exports.deleteGroceryRouter = void 0;
const express_1 = __importDefault(require("express"));
const datasource_1 = require("../datasource/datasource");
const Grocery_entity_1 = require("../entities/Grocery.entity");
const router = express_1.default.Router();
exports.deleteGroceryRouter = router;
router.post("/api/delete-grocery", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    yield datasource_1.connection
        .createQueryBuilder()
        .delete()
        .from(Grocery_entity_1.Grocery)
        .where("id = :id", { id })
        .execute();
    return res.status(200);
}));
//# sourceMappingURL=delete_grocery.js.map