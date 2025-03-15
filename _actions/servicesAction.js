"use server";
import connectDB from "@/config/database";
import ServicesModel from "@/models/servicesModel";


export async function getServicesType() {
  try {
    console.log("🔄 Connecting to MongoDB...");
    await connectDB(); 

    console.log("📡 Fetching data from NavbarModel...");
    const rawData = await ServicesModel.find();
    
    console.log("✅ Data fetched successfully:", rawData);
    
    const services= JSON.parse(JSON.stringify(rawData));
    return { services };
  } catch (error) {
    console.error("❌ Error fetching data:", error.message);
    return { errMsg: error.message };
  }
}