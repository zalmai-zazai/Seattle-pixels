import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection?.readyState === 1) {
    console.log("Already Connected to the database");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to the database");
  } catch (error) {
    console.error("Field to connect to the Database", error);
    throw error;
  }
};

export default connectDB;
