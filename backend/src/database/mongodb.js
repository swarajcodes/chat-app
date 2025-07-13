import mongoose from "mongoose";
import { MONGO_URI } from "../config/env.js";

export const connectToDatabase = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.info(`MongoDB is connected at :${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection Failed: ${error}`);
    process.exit(1);
  }
};
