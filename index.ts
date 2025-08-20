import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import userRouter from "./Router/userrouter";  
import studentRouter from "./Router/studentrouter";



import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { swaggerOptions } from "./swaggerOptions";

const swaggerSpec = swaggerJsDoc(swaggerOptions);






import dotenv from 'dotenv'
dotenv.config()


const app = express();
const PORT = 3000;

const MongoURL:string = process.env.MONGO_URL!
mongoose.connect(MongoURL);

app.use(express.json());
app.use(cors());

// Serve separate Swagger docs
app.use("/api-docs/user", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
// app.use("/api-docs/student", swaggerUI.serve, swaggerUI.setup(swaggerSpec2));





// Routers
app.use("/user", userRouter); 
app.use("/student", studentRouter);






app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`User Swagger Docs: http://localhost:${PORT}/api-docs/user`);
});
