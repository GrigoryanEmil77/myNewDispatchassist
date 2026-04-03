// "use server";
// import connectDB from "../config/database";
// import ContactModel from "../models/footherModel";


// export async function getContact() {
//   try {
//     console.log(" Connecting to MongoDB...");
//     await connectDB(); 

   
//     const rawData = await ContactModel.find();
    

//     const data= JSON.parse(JSON.stringify(rawData));
//     return {data };
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//     return { errMsg: error.message };
//   }
// }
"use server";

import connectDB from "../config/database";
import ContactModel from "../models/footherModel";

export async function getContact() {
  try {
    console.log("Connecting to MongoDB...");

    const db = await connectDB();

    // եթե DB չկա → fallback
    if (!db) {
      console.log("MongoDB unavailable, using fallback");
      return { data: [] };
    }

    const rawData = await ContactModel.find().lean();

    return { data: rawData };

  } catch (error) {

    console.error("Error fetching data:", error.message);

    // fallback
    return { data: [] };
  }
}