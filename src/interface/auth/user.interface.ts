export type Gender = "Male" | "Female" | "other";

export type UserRoles = "Patient" | "Doctor" | "Nurse" | "Receptionist";

export interface UserInterface extends Document {
  id?: string;
  first_Name: string;
  last_Name:string;
  email: string;
  password: string;
  age: number;
  dateOfBirth: Date;
  gender: Gender;
  phone: string;
  address: {
    state: string;
    city: string;
    pinCode: string;
  };
  userRole: UserRoles;
  isActive: boolean;
  isVerified: boolean;
  lastLogin?: Date;
  created?: Date;
  updated?: Date;
}
