"use server";

import connectDB from "@/config/database";
import TruckModel from "@/models/truckModel";

export async function getTrucktype() {
  try {
    console.log(" Connecting to MongoDB...");
    await connectDB(); 

    
    const rawData = await TruckModel.find();
    

    const truck= JSON.parse(JSON.stringify(rawData));
    return { truck };
  } catch (error) {
    console.error(" Error fetching data:", error.message);
    return { errMsg: error.message };
  }
}


