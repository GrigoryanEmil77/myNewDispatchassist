
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

// import mongoose from "mongoose";

// const MONGO_URI = process.env.MONGODB_URI;

// let isConnected = false;

// const connectDB = async () => {
//   if (isConnected) return true;

//   try {
//     await mongoose.connect(MONGO_URI, {
//       serverSelectionTimeoutMS: 3000,
//       bufferCommands: false
//     });

//     isConnected = true;
//     console.log("MongoDB connected");
//     return true;

//   } catch (error) {
//     console.error("MongoDB connection error:", error.message);
//     return false; // fallback օգտագործելու համար
//   }
// };

// export default connectDB;






// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error("Please define MONGODB_URI in .env");
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// export default async function connectDB() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
//       return mongoose;
//     });
//   }

//   cached.conn = await cached.promise;
//   return cached.conn;
// }

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env");
}

// Use globalThis (Vercel-safe)
let cached = globalThis.mongoose;

if (!cached) {
  cached = globalThis.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      maxPoolSize: 10,
    }).then((mongoose) => mongoose.connection);
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null;
    throw err;
  }

  return cached.conn;
}

export default connectDB;