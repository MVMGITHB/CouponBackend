import mongoose from "mongoose";

export const connectDB = async (DATABASE_URI) => {
  try {
    const DB_options = {
      dbname: "Coupons",
    };
    await mongoose.connect(DATABASE_URI, DB_options);
    console.log("DB connected");
  } catch (err) {
    console.error("DB connection error:", err);
  }
};
