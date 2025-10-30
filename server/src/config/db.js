import mongoose from "mongoose";
import { mongo_url } from "./env.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${mongo_url}/extalent`);
    console.log("Database connected: ", mongoose.connection.host);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
