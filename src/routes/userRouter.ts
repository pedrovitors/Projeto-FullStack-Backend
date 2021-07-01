import express from "express";

export const userRouter = express.Router
const userController = new UserController

userController.post("/signup", userController.signup)

userController.post("/login", userController.login)