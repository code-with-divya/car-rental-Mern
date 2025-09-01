import express from "express"
export const UserRoute=express.Router()
import { getallusers ,Userregister,Userlogin, googleLogin} from "../controller/User_controller.js"



UserRoute.post("/create", Userregister)

UserRoute.post("/login", Userlogin)

UserRoute.get("/getusers", getallusers)

UserRoute.get("/googlelogin",googleLogin)