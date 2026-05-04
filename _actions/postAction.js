
"use server";
import { unstable_noStore } from "next/cache"; 
import connectDB from "../config/database";
import AboutModel from "../models/postModel";

export async function getPosts() {
  try {
      unstable_noStore();
    console.log("Connecting to MongoDB...");
    await connectDB();


    const rawData = await AboutModel.find().lean().exec();


    const plainData = rawData.map((item) => ({
      ...item,
      _id: item._id.toString(),
    }));

    return { data: plainData };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return { errMsg: error.message };
  }
}
