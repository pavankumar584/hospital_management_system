import { model, Schema } from "mongoose";
import { UserInterface } from "../../interface/auth/user.interface";

const userSchema = new Schema<UserInterface>(
  {
    first_Name: {
      type: String,
      required: true,
      trim: true,
    },
    last_Name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    address: {
      state: { type: String, required: true, trim: true },
      city: { type: String, required: true, trim: true },
      pinCode: { type: String, required: true, trim: true },
    },
    userRole: {
      type: String,
      enum: ["Patient", "Doctor", "Admin", "Receptionist", "Nurse"],
      required: true,
    },
    isActive: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
    lastLogin: { type: Date },
  },
  { timestamps: true }
);

export const UserModel = model<UserInterface>("User", userSchema);
