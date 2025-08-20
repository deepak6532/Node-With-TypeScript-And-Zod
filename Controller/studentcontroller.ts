import { Request, Response } from 'express'
import { studentSchema, Student } from '../Model/studentschema'
import type { StudentType } from '../Model/studentschema'


export const createStudent = async (req: Request, res: Response) => {
    const parsedData = studentSchema.safeParse(req.body)

    if (!parsedData.success) {
        return res.status(400).send({
             message: "Student validation failed",
             errors: parsedData.error.issues
        })
    }

    const data: StudentType = parsedData.data

    const {firstName,lastName ,email,phone,address } = data

    const alreadyStudent = await Student.findOne({ email })

    if (alreadyStudent) {
        return res.status(400).send({ message: "Student already exists " })
    }

    // generate a unique college id 
    let collegeid= ""
    let length =6
    for(let  i=0; i<length; i++)
    {
        let random  = Math.floor(Math.random() *10)
        collegeid += random
    }
    

    const newData =  {
        firstName,lastName,collegeId:collegeid,email,phone,address
    }

    const result = new Student(newData)
    await result.save()

    return res.status(200).send({ message: "student created successfully ", result })
}



// get all Student

export const getAllStudent = async (req:Request,res:Response) =>{

    const data =  await Student.find()

    if(!data)
    {
        return res.status(400).send({message:"Student Data Not Found"})
    }

    return res.status(200).send({message:"All Student:",data})

}


// getOneStudent

export const getOneStudent  = async(req:Request,res:Response) =>{

    const  collegeId  = req.params.collegeId

    const data  = await Student.findOne({collegeId})

    if(!data)
    {
        return res.status(400).send({message:"Student not found!"})
    }
    return res.status(200).send({message:"Student Detail:",data})


}



// update student
export const updateStudent =  async(req:Request,res:Response) =>
{
    const id = req.params.id

    const {firstName,lastName,email,phone,address} =  req.body

    const alreadyStudent  = await Student.findById(id)

    if(!alreadyStudent)
    {
        return res.status(400).send({message:"student not exists!"})
    }

    const newData =  {
        firstName,lastName,email,phone,address
    }

    const result = await Student.findByIdAndUpdate(id,newData,{new:true})

    return res.status(200).send({message:"student update successfully",result})

}


// delete api
export const deleteStudent = async(req:Request,res:Response) =>{

    const id = req.params.id

    const alreadyStudent = await Student.findById(id)

    if(!alreadyStudent)
    {
        return res.status(400).send({message:"Student not found "})
    }

    console.log("alreadyStudent Check:",alreadyStudent)


    const result = await Student.findByIdAndDelete(id)

    return res.status(200).send({message:"Student Delete Successfully :",result})
}