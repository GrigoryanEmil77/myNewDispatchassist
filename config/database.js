const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGODB_URI; 

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI,  {
      serverSelectionTimeoutMS:5000, 
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};


module.exports = connectDB; 




