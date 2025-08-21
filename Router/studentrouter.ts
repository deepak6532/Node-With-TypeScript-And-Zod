import express from 'express'

import { createStudent,getAllStudent, getOneStudent,updateStudent,deleteStudent,getStudentBySL }  from '../Controller/studentcontroller'

const router = express.Router()


router.post("/createStudent",createStudent)

router.get("/getAllStudent",getAllStudent)

router.get("/getOneStudent/:collegeId",getOneStudent)

router.put("/updateStudent/:id",updateStudent)

router.delete("/deleteStudent/:id",deleteStudent)


router.get("/getStudentBySL",getStudentBySL)  // new add 21 



export default router