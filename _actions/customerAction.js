"use server";
import connectDB from "@/config/database";
import CustomerModel from "@/models/customerModel";

export async function getCustomer() {
  try {
    console.log(" Connecting to MongoDB...");
    await connectDB(); 

   
    const rawData = await CustomerModel.find();
    

    const data= JSON.parse(JSON.stringify(rawData));
    return {data };
  } catch (error) {
    console.error(" Error fetching data:", error.message);
    return { errMsg: error.message };
  }
}
