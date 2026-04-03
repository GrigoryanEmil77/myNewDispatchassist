
// import mongoose from "mongoose";

// const MONGO_URI = process.env.MONGODB_URI;

// let isConnected = false;

// const connectDB = async () => {
//   if (isConnected) return;

//   try {
//     const db = await mongoose.connect(MONGO_URI, {
//       serverSelectionTimeoutMS: 10000,
//     });

//     isConnected = true;
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//   }
// };

// export default connectDB;


import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI;

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 3000,
  
    });

    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectDB;