import type { Request, Response } from "express";
import { userSchema, User } from "../Model/userschema";
import type { UserInput } from "../Model/userschema";

import bcrypt from 'bcrypt'



export const CreateUser = async (req: Request, res: Response) => {
  const parsed = userSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      message: "Validation failed",
      errors: parsed.error.issues
    });
  }

  const data: UserInput = parsed.data;

  const {firstName,lastName,email,age,phone,password} = data



  const alreadyUser = await User.findOne({email})
  

  console.log("Check  User ",alreadyUser)

  if(alreadyUser)
  {
    return res.status(400).send({message:"user already exists with this email"})
  }
 
  const salt =   bcrypt.genSaltSync(10)
  const hash =   bcrypt.hashSync(password,salt)


  const userdata = {
    firstName,lastName,email,age,phone,password:hash
  }

  const result = new User(userdata);
  await result.save();

  return res
    .status(200)
    .send({ message: "User Created Successfully", data: result });
};



// get one user  by email

export const getUserByEmail = async (req:Request,res:Response) =>{

  const {email} = req.params
  
  const data =  await User.findOne({email})

  if(!data)
  {
    return res.status(400).send({message:"Data not found this email "})
  }

  console.log("User Data:",data)

  return res.status(200).send({message:"User Data ",data})
}


// get user by id 

export const getUserById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = await User.findById(id);

    if (!data) {
      return res.status(404).send({ message: "Data not found this id" });
    }

    return res.status(200).send({ message: "User Data", data });
  } catch (error) {
    return res.status(500).send({ message: "Server error", error });
  }
};



// get all data 

export const getAllUser = async (req:Request,res:Response) =>{


  const limit   =  Number(req.query.limit)

  const skip =  Number(req.query.skip)

  const data  = await User.find().skip(skip).limit(limit)           // .sort({age:-1})  arrange descending order -1 

  console.log("data",data)

  if(!data)
  {
    return res.status(400).send({message:"Data not found"})
  }

  return res.status(200).send({message:"All User",data})
}


// update user 

export const updateUser =  async(req:Request,res:Response) => {

 
  const id = req.params.id

  const {firstName,lastName ,age,email, phone ,password } =  req.body


  const alreadyUser  = await User.findById(id)
  console.log("alreadyUser",alreadyUser)

  if(!alreadyUser)
  {
    return res.status(400).send({message:"User not found try again!"})
  }

  const salt =   bcrypt.genSaltSync(10)
  const hash =   bcrypt.hashSync(password,salt)

  const newData = {
    firstName,lastName,age,email,phone,password:hash
  }

  const result =  await User.findByIdAndUpdate(id,newData,{new:true})

  return res.status(200).send({message:"update successfully:",result})
}


// delete user 

export const deleteUser = async(req:Request,res:Response) =>{

  const {id}  = req.params

  const alreadyUser  = await User.findById(id)

  // console.log("alreadyUser",alreadyUser)

  if(!alreadyUser)
  {
    return res.status(400).send({message:"User not found try again!"})
  }

  const result = await User.findByIdAndDelete(id)

  return res.status(200).send({message:"user delete successfully"})

}


// getUserBySl

export const getUserBySl =  async (req:Request ,res:Response) =>{

  const limit = Number(req.query.limit) 

  const skip =  Number(req.query.skip)
  
  const data =  await User.find().skip(skip).limit(limit)

  if(!data)
  {
    return res.status(400).send({message:"Data not found try again!"})
  }

  if(data.length === 0)
  {
    return res.status(400).send({message:"Data is empty not found chek skip value  try again!"})
  }

  return res.status(200).send({message:"User Data :",data})

}




