import express, { Request } from "express";
import { connection } from "../datasource/datasource";
import { Grocery } from "../entities/Grocery.entity";
import { ProductsTypes } from "src/entities/Products.entity";

export interface IGroceryProduct {
  id: string;
  name: string;
  type: ProductsTypes;
  price: number;
  quantity?: number;
}

const router = express.Router();

router.post(
  "/api/update-grocery",
  async (req: Request<{}, {}, IGroceryProduct>, res) => {
    const { id, name, price, type, quantity } = req.body;
    console.log(req.body);
    if (!quantity) {
      await connection
        .createQueryBuilder()
        .delete()
        .from(Grocery)
        .where("id = :id", { id })
        .execute();
      return res.status(200);
    } else {
      const result = await Grocery.upsert(req.body, ["id"]);
      return res.send(result.raw).status(200);
    }
  }
);

export { router as updateGroceryRouter };
