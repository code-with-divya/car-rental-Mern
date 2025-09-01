import express from "express"
import { vehicleroute } from "../routes/VehicleRoute.js"
import { UserRoute } from "../routes/UserRoute.js"
import { bookingRoute } from "../routes/BookingcarRoute.js"
import { Sendmail } from "../controller/sendmail.js"


export const Allrouter = express.Router()

Allrouter.use("/vehicle",vehicleroute)

Allrouter.use("/user",UserRoute)

Allrouter.use("/vehicleBooking",bookingRoute)
Allrouter.use("/sendmail",Sendmail)