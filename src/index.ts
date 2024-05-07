import { connection } from "./datasource/datasource";
import express from "express";
import { deleteGroceryRouter } from "./routes/delete_grocery";
import "dotenv/config";
import { getProductsRouter } from "./routes/get_products";
import { updateGroceryRouter } from "./routes/update_grocery";
import { getGroceryRouter } from "./routes/get_grocery";

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
