import { connection } from "./datasource/datasource";
import express from "express";
import { getProductsRouter } from "../src/routes/get_products";
import { getGroceryRouter } from "../src/routes/get_grocery";
import { updateGroceryRouter } from "../src/routes/update_grocery";
import { deleteGroceryRouter } from "./routes/delete_grocery";
import "dotenv/config";

const app = express();

const main = async () => {
  try {
    await connection.initialize();

    app.use(express.json());
    app.use([
      getProductsRouter,
      getGroceryRouter,
      updateGroceryRouter,
      deleteGroceryRouter,
    ]);

    app.listen(process.env.PORT, () => {
      console.log("Now running on port 8080");
    });
  } catch (error) {
    console.warn("CONNECTION TO DB FAILED", error);
  }
};

main();
