"use server";

import connectDB from "../config/database"; 
import RequestModel from "../models/requestModel";

export async function getRequest() {
  try {
    console.log("Connecting to MongoDB...");
    await connectDB();

    const rawData = await RequestModel.find();
    const data = JSON.parse(JSON.stringify(rawData));
    return { data };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return { errMsg: error.message };
  }
}
// "use server";
// import { unstable_noStore } from "next/cache";
// import connectDB from "../config/database"; 
// import RequestModel from "../models/requestModel";

// export async function getRequest() {
//     unstable_noStore(); 
//   try {
//     console.log("Connecting to MongoDB...");

//     const db = await connectDB();

//     // եթե DB չկա → fallback
//     if (!db) {
//       console.log("MongoDB unavailable, using fallback");
//       return { data: [] };
//     }

//     const rawData = await RequestModel.find().lean();

//     return { data: rawData };

//   } catch (error) {

//     console.error("Error fetching data:", error.message);

//     // fallback
//     return { data: [] };
//   }
// }