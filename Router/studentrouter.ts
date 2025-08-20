import express from 'express'

import { createStudent,getAllStudent, getOneStudent,updateStudent,deleteStudent }  from '../Controller/studentcontroller'

const router = express.Router()


router.post("/createStudent",createStudent)

router.get("/getAllStudent",getAllStudent)

router.get("/getOneStudent/:collegeId",getOneStudent)

router.put("/updateStudent/:id",updateStudent)

router.delete("/deleteStudent/:id",deleteStudent)


export default router