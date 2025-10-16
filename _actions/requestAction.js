"use server";

import connectDB from "../config/database"; 
import RequestModel from "../models/requestModel";

export async function getRequest() {
  try {
    console.log("Connecting to MongoDB...");
    await connectDB();

    const rawData = await RequestModel.find();
    const data = JSON.parse(JSON.stringify(rawData));
    return { data };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return { errMsg: error.message };
  }
}
