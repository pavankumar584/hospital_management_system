import dotenv from "dotenv";

dotenv.config({
  path: process.env.NODE_ENV === "Production" ? ".env.prod" : ".env",
});

export const { PORT, MONGODB_URL, MONGODB_Prod_URL, NODE_ENV } = process.env;
