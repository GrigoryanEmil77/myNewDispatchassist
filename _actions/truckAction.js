// "use server";
// import connectDB from "../config/database";
// import TruckModel from "../models/truckModel";

// export async function getTrucktype() {
//   try {
//     console.log("Connecting to MongoDB...");
//     await connectDB(); 

//     const rawData = await TruckModel.find();
//     const data = JSON.parse(JSON.stringify(rawData));
    
//     return { data };
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//     return { errMsg: error.message };
//   }
// }
"use server";
import connectDB from "../config/database";
import TruckModel from "../models/truckModel";

export async function getTrucktype() {
  try {
    console.log("Connecting to MongoDB...");

    const db = await connectDB();
    if (!db) {
      console.log("MongoDB unavailable, using fallback");
      return { data: [] }; // fallback
    }

    const rawData = await TruckModel.find().lean(); // lean() վերադարձնում է plain objects
    return { data: rawData };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return { data: [] }; // fallback
  }
}