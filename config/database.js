// import mongoose from "mongoose";

// const uri = process.env.MONGODB_URI;

// const connectDB = async () => {
//   try {
//     if (!uri) {
//       throw new Error("MONGODB_URI is not defined in environment variables");
//     }

//     await mongoose.connect(uri); 
//     // console.log("MongoDB URI:", uri);

//     console.log("Connected successfully to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error.message);
//   }
// };

// export default connectDB;




const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGODB_URI; 

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, 
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
}

export default connectDB;

