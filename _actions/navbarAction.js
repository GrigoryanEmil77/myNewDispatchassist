"use server";

import connectDB from "../config/database";
import NavbarModel from "../models/navbarModel";

export async function getNavbarData() {
  try {
    console.log(" Connecting to MongoDB...");
    await connectDB(); 


    const rawData = await NavbarModel.find(); 

    const data = JSON.parse(JSON.stringify(rawData));
    return { data };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return { errMsg: error.message };
  }
}

