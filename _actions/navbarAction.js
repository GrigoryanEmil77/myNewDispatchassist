"use server";

import connectDB from "@/config/database";
import NavbarModel from "@/models/navbarModel";

// export async function getNavbarData() {
//   try {
//     console.log("🔄 Connecting to MongoDB...");
//     await connectDB(); 

//     console.log("📡 Fetching data from NavbarModel...");
//     const rawData = await NavbarModel.find();
    
//     console.log("✅ Data fetched successfully:", rawData);
    
//     const data = JSON.parse(JSON.stringify(rawData));
//     return { data };
//   } catch (error) {
//     console.error("❌ Error fetching data:", error.message);
//     return { errMsg: error.message };
//   }
// }

// "use server"; 
// import connectDB from "@/config/database";
// import CustomerModel from "@/models/customerModel";

export async function getNavbarData() {
  try {
    console.time("⏳ MongoDB Fetch Time"); // Start timer for performance tracking

    if (!global._mongoClientPromise) {
      console.log("🔄 Connecting to MongoDB...");
      await connectDB();
    }

    console.log("📡 Fetching customers...");
    const customers = await NavbarModel.find({}, { __v: 0 }).lean(); // `lean()` improves speed 🚀

    console.timeEnd("⏳ MongoDB Fetch Time"); // Log execution time

    return { data: customers };
  } catch (error) {
    console.error("❌ Error fetching data:", error.message);
    return { errMsg: error.message };
  }
}
