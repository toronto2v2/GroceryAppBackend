import express from "express";
import { connection } from "../datasource/datasource";
import { Grocery } from "../entities/Grocery.entity";

const router = express.Router();

router.get("/api/get-grocery", async (req, res) => {
  const productList = await connection.getRepository(Grocery).find();
  return res.send(productList).status(200);
});

export { router as getGroceryRouter };
