import cors from "cors";
import "dotenv/config";
import express, { Application } from "express";
import { connectDb } from "./config/db.config";

// express app
const app: Application = express();

// middlewares
app.use(express.json());
app.use(cors());

// db connection
connectDb()

const port =process.env.PORT || 8080

// listen app
app.listen(port, () => {
  console.log(`Server is running on port: ${port}👌`);
});
