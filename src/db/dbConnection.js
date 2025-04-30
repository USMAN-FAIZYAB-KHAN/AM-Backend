import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const DB_URI = process.env.MONGODB_URL

const connection = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${DB_URI}/${DB_NAME}`)
        console.log("MongoDB connected");
    }
    catch (err) {
        console.error("MongoDB connection error:", err);
    }
}

export default connection;

