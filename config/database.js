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

const connectDB = async () => {
  if (mongoose.connection.readyState) {
    console.log("✅ Using existing MongoDB connection");
    return mongoose.connection;
  }

  try {
    mongoose.set("strictQuery", false);

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("🚀 MongoDB connected");

    mongoose.connection.once("open", () => console.log("📡 Connection Opened"));
    mongoose.connection.once("error", (err) => console.error("❌ Connection Error:", err));
  } catch (error) {
    console.error("🔥 MongoDB connection failed:", error);
    process.exit(1); // Exit process if DB fails to connect
  }
};

export default connectDB;

