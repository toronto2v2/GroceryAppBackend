import express, { Request } from "express";
import { connection } from "../datasource/datasource";
import { Grocery } from "../entities/Grocery.entity";
import { IGroceryProduct } from "./update_grocery";

const router = express.Router();

router.post(
  "/api/delete-grocery",
  async (req: Request<{}, {}, IGroceryProduct>, res) => {
    const { id } = req.body;
    await connection
      .createQueryBuilder()
      .delete()
      .from(Grocery)
      .where("id = :id", { id })
      .execute();
    return res.status(200);
  }
);

export { router as deleteGroceryRouter };
