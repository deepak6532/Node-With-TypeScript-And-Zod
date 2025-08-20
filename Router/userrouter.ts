import express from "express";
import { CreateUser, getUserByEmail, getUserById ,getAllUser, updateUser, deleteUser } from "../Controller/usercontroller";

const router = express.Router();

/**
 * @swagger
 * /user/CreateUser:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               age:
 *                 type: number
 *               phone:
 *                 type: string
 *               password:
 *                 type: string
 *              
 *     responses:
 *       200:
 *         description: User created successfully
 */
router.post("/CreateUser", CreateUser);

/**
 * @swagger
 * /user/getUserByEmail/{email}:
 *   get:
 *     summary: Get a specific user by email
 *     tags: [User]
 *     parameters:
 *       - in: path 
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User retrieved successfully
 */
router.get("/getUserByEmail/:email", getUserByEmail);


/**
 * @swagger
 * /user/getUserById/{id}:
 *   get:
 *     summary: Get a specific user by ID
 *     tags: [User]
 *     parameters:
 *       - in: path 
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User retrieved successfully
 */
router.get("/getUserById/:id", getUserById);


/**
 * @swagger
 * /user/getAllUser:
 *   get:
 *     summary: Get all users
 *     tags: [User]
 *     responses:
 *       200:
 *         description: A list of all users
 */
router.get("/getAllUser", getAllUser);

/**
 * @swagger
 * /user/updateUser/{id}:
 *   put:
 *     summary: Update a user by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               age:
 *                 type: number
 *               phone:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 */
router.put("/updateUser/:id", updateUser);

/**
 * @swagger
 * /user/deleteUser/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully
 */
router.delete("/deleteUser/:id", deleteUser);

export default router;