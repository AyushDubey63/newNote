import { Router } from "express";
import { checkUser, createUser, fetchAllUsers, updateUser } from "../controller/user.controller.js";

export const userRouter = Router()

userRouter
  .get('/', fetchAllUsers)
  .post('/signup',createUser)
  .post('/login', checkUser)
  .patch('/:id',updateUser)

