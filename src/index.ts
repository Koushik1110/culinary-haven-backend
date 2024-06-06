import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
console.log(process.env.MONGODB_URI);
// db connection
mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log("Db connected!😁"));

// express app
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// test api
app.get("/test", async (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to our server!😊" });
});

// listen app
app.listen(8080, () => {
  console.log("Server is running on port 8080👌");
});
