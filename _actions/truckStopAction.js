// "use server";

// import connectDB from "../config/database";
// import TruckTypesStopModel from "../models/truckStopModel";

// export async function getTruckStop() {
//   try {
//     console.log("Connecting to MongoDB...");
//     await connectDB(); 

//     const rawData = await TruckTypesStopModel.find();
//     const data = JSON.parse(JSON.stringify(rawData));
    
//     return { data };
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//     return { errMsg: error.message };
//   }
// }
"use server";
import connectDB from "../config/database";
import TruckTypesStopModel from "../models/truckStopModel";

export async function getTruckStop() {
  try {
    console.log("Connecting to MongoDB...");
    const db = await connectDB();
    if (!db) {
      console.log("MongoDB unavailable, using fallback");
      return { data: [] }; // fallback
    }

    const rawData = await TruckTypesStopModel.find().lean();
    return { data: rawData };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return { data: [] }; // fallback
  }
}
