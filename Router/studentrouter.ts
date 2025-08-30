import express from 'express'

import { createStudent,getAllStudent, getOneStudent,updateStudent,deleteStudent }  from '../Controller/studentcontroller'

const router = express.Router()


router.post("/",createStudent)

router.get("/",getAllStudent)

router.get("/:collegeId",getOneStudent)

router.put("/:id",updateStudent)

router.delete("/:id",deleteStudent)




export default router
