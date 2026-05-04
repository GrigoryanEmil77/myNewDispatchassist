"use server";
import { unstable_noStore } from "next/cache"; 
import connectDB from "../config/database";
import ServicesModel from "../models/servicesModel";


export async function getServicesType() {
  try {
      unstable_noStore();
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
