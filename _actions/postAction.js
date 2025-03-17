"use server"; 

import connectDB from "@/config/database";
import AboutModel from "@/models/postModel";

export async function getPosts() {
  try {
    console.log(" Connecting to MongoDB...");
    await connectDB(); 

   
    const rawData = await AboutModel.find(); 
    

    const data = JSON.parse(JSON.stringify(rawData));

    return { data };
  } catch (error) {
    console.error(" Error fetching data:", error.message);
    return { errMsg: error.message };
  }
}
