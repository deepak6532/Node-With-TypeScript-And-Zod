import  {z}  from 'zod'

import mongoose,{Schema,Document} from 'mongoose'

export const studentSchema = z.object({
    firstName:z.string().min(1,"first name is  required"),
    lastName:z.string().min(1,"last name is required"),

    // collegeId:z.string().min(6,"College id required at least 6 character "),

    email:z.string().email({message:"Invalid email"}),

    phone: z.string().regex(/^\d{10}$/, {
        message: "Phone number must be 10 digits",
      }),

    address:z.string().min(3,"Student address is required ").max(100)
});
export type StudentType = z.infer<typeof studentSchema>




// mongoose schema type

export interface IStudent extends Document{
    firstName:string,
    lastName:string,
    collegeId:string,
    email:string,
    phone:string,
    address:string
}


const studentMongoSchema = new Schema<IStudent>({
    firstName:{
        type:String,
        required:true
    },
    lastName:{type:String,required:true},
    collegeId:{type:String},
    email:{type:String,required:true},
    phone:{type:String,required:true},
    address:{type:String,required:true}

},{versionKey:false})

export const Student = mongoose.model<IStudent>("Student",studentMongoSchema)