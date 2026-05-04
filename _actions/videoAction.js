"use server";

import connectDB from "../config/database";
import VideoTypesAllModel from "../models/videoModel";

export async function getVideo() {
  try {
    console.log(" Connecting to MongoDB...");
    await connectDB(); 

    const rawData = await VideoTypesAllModel.find();

    const data= JSON.parse(JSON.stringify(rawData));
    return { data };
  } catch (error) {
    console.error(" Error fetching data:", error.message);
    return { errMsg: error.message };
  }
}
