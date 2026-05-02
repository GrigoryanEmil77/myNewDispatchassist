"use server";
import connectDB from "../config/database";
import ServicesModel from "../models/servicesModel";


export async function getServicesType() {
  try {
    console.log("🔄 Connecting to MongoDB...");
    await connectDB(); 


    const rawData = await ServicesModel.find();
    

    const data= JSON.parse(JSON.stringify(rawData));
    return { data };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return { errMsg: error.message };
  }
}

// "use server";
// import { unstable_noStore } from "next/cache";
// import connectDB from "../config/database";
// import ServicesModel from "../models/servicesModel";

// export async function getServicesType() {
//     unstable_noStore(); 
//   try {
//     console.log("Connecting to MongoDB...");

//     const db = await connectDB();

//     // եթե DB չկա → fallback
//     if (!db) {
//       console.log("MongoDB unavailable, using fallback");
//       return { data: [] };
//     }

//     const rawData = await ServicesModel.find().lean();

//     return { data: rawData };

//   } catch (error) {

//     console.error("Error fetching data:", error.message);

//     // fallback
//     return { data: [] };
//   }
// }