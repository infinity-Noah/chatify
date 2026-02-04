import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
    try{
        await mongoose.connect(ENV.MONGO_URI);
        console.log("Database connceted successfully!")
    } catch (error) {
        console.error("Error connecting to mongo db", error);
        process.exit(1); // 1 status code means fail, 0 means success
    }
}