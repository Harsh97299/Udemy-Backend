import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        if (!uri) throw new Error("MONGO_URI environment variable is not defined");
        await mongoose.connect(uri);
        console.log("DB connected");
    } catch (error) {
        console.error("MongoDB connection error", error);
        process.exit(1);
    }
}

export default connectDB;