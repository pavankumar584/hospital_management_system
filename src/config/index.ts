import dotenv from "dotenv";

dotenv.config({
  path: process.env.NODE_ENV === "Production" ? ".env" : ".env.prod",
});

export const { PORT, MONGODB_URL, MONGODB_Prod_URL, NODE_ENV } = process.env;