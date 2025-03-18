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
import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    if (!uri) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    if (mongoose.connection.readyState === 1) {
      console.log("Already connected to MongoDB");
      return;
    }

    await mongoose.connect(uri);

    console.log("Connected successfully to MongoDB");

    // Handle successful connection
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connection established");
    });

    // Handle errors after connection is established
    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    // Handle disconnection
    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected");
    });

  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process on failure
  }
};

export default connectDB;

