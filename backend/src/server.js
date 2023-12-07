import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import path from "path";

import { DB_URL, FRONTEND_URL, PORT } from "./config/index.js";
import router from "./routes/index.js";
import { errorHandlerMiddleware } from "./middlewares/error-handler-middleware.js";

const app = express();
const corsOptions = {
  credentials: true,
  origin: [FRONTEND_URL],
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
/* STATIC FOLDER */
app.use("/uploads", express.static("./uploads"));

/* ABSOLUTE PATH OF BACKEND FOLDER */
const __filename = fileURLToPath(import.meta.url);
export const ROOT_PATH = path.dirname(__filename);
// Routes
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
