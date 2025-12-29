import mongoose from "mongoose";
import { MONGODB_Prod_URL, MONGODB_URL, NODE_ENV } from ".";

export const connectionDB = async () => {
  try {
    const db = NODE_ENV === "Production" ? MONGODB_Prod_URL : MONGODB_URL;
    if (!db) throw new Error("Mongodb Url is missing");
    await mongoose.connect(db);
    console.log("Mongodb connection is Successfully..!");
  } catch (error: any) {
    console.log(error.message);
    process.exit(1);
  }
};