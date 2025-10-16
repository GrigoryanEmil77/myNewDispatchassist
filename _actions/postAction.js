"use server";

import connectDB from "../config/database";
import AboutModel from "../models/postModel";

export async function getPosts() {
  try {
    await connectDB();
    const rawData = await AboutModel.find();
    const data = JSON.parse(JSON.stringify(rawData));
    return { data };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return { errMsg: error.message };
  }
}

