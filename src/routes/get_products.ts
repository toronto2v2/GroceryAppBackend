import express from "express";
import { Products } from "../entities/Products.entity";
import { connection } from "../datasource/datasource";

const router = express.Router();

router.get("/api/get-products", async (req, res) => {
  const productList = await connection.getRepository(Products).find();
  return res.send(productList).status(200);
});

export { router as getProductsRouter };
