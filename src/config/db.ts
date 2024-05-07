import mongoose from "mongoose";
import config from "./config";


export const connectDatabase = async () => {
    const db = config.db.url.replace("<password>", config.db.password);
    const options = {
        autoIndex: true,
        serverSelectionTimeoutMS: 5000,
    };
    try {
        console.log("hello")
        await mongoose.connect(db, options);
        console.log("connected to database ✅");
    } catch (err: any) {
        console.log(`Error connecting to mongoose due to ${err.message} ❌`);
    }
};