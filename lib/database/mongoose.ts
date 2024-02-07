import mongoose from "mongoose";
let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) {
    console.log("NO MONGO_DB URL PROVIDED");
    return "NO MONGO_DB URL PROVIDED";
  }
  if (isConnected) {
    console.log("Mongo DB already connected");
    return "Mongo DB already connected";
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "stuckoverflow",
    });
    isConnected = true;
    console.log("Connected to DB");
  } catch (error) {
    console.log("ERROR", error);
  }
};
