"use server";
import connectDB from "@/config/database";
import FollowModel from "@/models/followModel";



export async function getFollow() {
  try {
    console.log("🔄 Connecting to MongoDB...");
    await connectDB(); 

    console.log("📡 Fetching data from NavbarModel...");
    const rawData = await FollowModel.find();
    
    console.log("✅ Data fetched successfully:", rawData);
    
    const data= JSON.parse(JSON.stringify(rawData));
    return {data };
  } catch (error) {
    console.error("❌ Error fetching data:", error.message);
    return { errMsg: error.message };
  }
}