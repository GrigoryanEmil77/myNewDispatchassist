// import mongoose from "mongoose";

// const connectDB = async () => {
//   if(mongoose.connections[0].readyState){
//     return true;
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log('Mongodb connected')
//     return true;
//   } catch (error) {
//     console.log(error)
//   }
// }

// export default connectDB;
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
let isConnected = false; // Prevents multiple connections

const connectDB = async () => {
  if (isConnected) {
    console.log("✅ Using existing MongoDB connection");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      maxPoolSize: 10, // 🚀 Allows multiple connections
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("🚀 MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};

export default connectDB;
