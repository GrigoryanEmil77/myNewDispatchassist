// const mongoose = require("mongoose");

// const MONGO_URI = process.env.MONGODB_URI; 

// const connectDB = async () => {
//   try {
//     await mongoose.connect(MONGO_URI,  {
//       serverSelectionTimeoutMS:5000, 
//     });
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error.message);
//     process.exit(1);
//   }
// };


// module.exports = connectDB; 



import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI;

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });

    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectDB;

