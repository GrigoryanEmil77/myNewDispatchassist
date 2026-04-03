// "use server";

// import connectDB from "../config/database";
// import AboutModel from "../models/postModel";

// export async function getPosts() {
//   try {
//     await connectDB();
//     const rawData = await AboutModel.find();
//     const data = JSON.parse(JSON.stringify(rawData));
//     return { data };
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//     return { errMsg: error.message };
//   }
// }

// "use server";

// import connectDB from "../config/database";
// import AboutModel from "../models/postModel";

// export async function getPosts() {
//   try {
//     console.log("Connecting to MongoDB...");
//     await connectDB();


//     const rawData = await AboutModel.find().lean().exec();


//     const plainData = rawData.map((item) => ({
//       ...item,
//       _id: item._id.toString(),
//     }));

//     return { data: plainData };
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//     return { errMsg: error.message };
//   }
// }

"use server";

import connectDB from "../config/database";
import AboutModel from "../models/postModel";

export async function getPosts() {
  try {
    console.log("Connecting to MongoDB...");

    const db = await connectDB();

    // եթե DB չկա → fallback
    if (!db) {
      console.log("MongoDB unavailable, using fallback");
      return { data: [] };
    }

    const rawData = await AboutModel.find().lean().exec();

    const plainData = rawData.map((item) => ({
      ...item,
      _id: item._id.toString(),
    }));

    return { data: plainData };

  } catch (error) {

    console.error("Error fetching data:", error.message);

    // fallback
    return { data: [] };
  }
}