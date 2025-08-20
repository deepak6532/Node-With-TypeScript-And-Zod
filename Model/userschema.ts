import { z } from "zod";
import mongoose, { Schema, Document } from "mongoose";



// Zod schema
export const userSchema = z.object({
  // username: z.string().min(2,"Name is required"),
  firstName: z.string().min(2,"first name is required"),
  lastName : z.string().min(2,"last name is required"),
  email: z.string().email({message:"invalid email "}),
  age: z.number().min(18,"minimum age required is 18 "),

  phone: z.string().regex(/^\d{10}$/, {
    message: "Phone number must be 10 digits",
  }),

  password: z.string().min(6, "Password required atleast 6 character "),

});
export type UserInput = z.infer<typeof userSchema>;





// Mongoose schema
export interface IUser extends Document {
  // username: string;
  firstName:string,
  lastName:string,
  email: string;
  age: number;
  phone:string,
  password:string
}


const userMongoSchema = new Schema<IUser>({
  // username: { type: String, required: true ,unique:true},
  firstName: {type:String,required:true},
  lastName:{type:String,require:true},
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
},{versionKey:false});

export const User = mongoose.model<IUser>("User", userMongoSchema);







