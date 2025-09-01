import express from "express"
import { Booking_controller, booking_history } from "../controller/Booking_controller.js"
export const bookingRoute=express.Router()


bookingRoute.post("/Bookcar",Booking_controller)

bookingRoute.get("/carbookinghistory",booking_history)

