import mongoose from "mongoose";

require("dotenv").config();
export const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const connect = await mongoose.connect(`${process.env.DATABASE_URL}`, {
      dbName: "lfa-lawyers",
    });

    console.log("Data base connected ", connect.connection.host);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
