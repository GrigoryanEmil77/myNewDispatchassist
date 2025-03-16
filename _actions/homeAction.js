"use server"; 

import connectDB from "@/config/database";
import HomeModel from "@/models/homeModel";


export async function getHome() {
  try {
    console.log(" Connecting to MongoDB...");
    await connectDB(); 

   
    const rawData = await HomeModel.find();
    

    const data = JSON.parse(JSON.stringify(rawData));

    return { data };
  } catch (error) {
    console.error("❌ Error fetching data:", error.message);
    return { errMsg: error.message };
  }
}