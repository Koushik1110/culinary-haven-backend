import mongoose from "mongoose";

const uri = process.env.MONGODB_URI as string;

export const connectDb = () => {
  mongoose
    .connect(process.env.MONGODB_URI as string)
    .then(() => console.log("Db connected!😁"))
    .catch((err) => console.log(err));
};
