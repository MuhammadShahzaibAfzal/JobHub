import express from "express";
import { DB_URL, PORT } from "./config/index.js";
import router from "./routes/index.js";
import { errorHandlerMiddleware } from "./middlewares/error-handler-middleware.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use("/api", router);

/* ERROR HANDLER MIDDLEWARE */
app.use(errorHandlerMiddleware);

/* DATABASE CONNECTIVITY */
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Database connected successfully 😍😍😍");
    app.listen(PORT, () => {
      console.log(`Server is listning on port ${PORT} 🚀🚀🚀 `);
    });
  })
  .catch((err) => {
    console.log("Something went wrong while connecting to Database 😢😢😢");
    console.log(err);
  });
