"use server";

import connectDB from "../config/database";
import VideoTypesAllModel from "../models/videoModel";

export async function getVideo() {
  try {
    console.log(" Connecting to MongoDB...");
    await connectDB(); 

    const rawData = await VideoTypesAllModel.find();

    const data= JSON.parse(JSON.stringify(rawData));
    return { data };
  } catch (error) {
    console.error(" Error fetching data:", error.message);
    return { errMsg: error.message };
  }
}
// "use server";
// import { unstable_noStore } from "next/cache";
// import connectDB from "../config/database";
// import VideoTypesAllModel from "../models/videoModel";

// export async function getVideo() {
//     unstable_noStore(); 
//   try {
//     console.log("Connecting to MongoDB...");
//     const db = await connectDB();
//     if (!db) {
//       console.log("MongoDB unavailable, using fallback");
//       return { data: [] }; // fallback
//     }

//     const rawData = await VideoTypesAllModel.find().lean();
//     return { data: rawData };
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//     return { data: [] }; // fallback
//   }
// }