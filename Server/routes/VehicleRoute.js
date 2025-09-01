import express from "express"
import { DeleteVehicle, getAllcars, updateVehicle, vehicleController } from "../controller/Vehicle_Controller.js"
import { Authenticate } from "../Middleware/Authentication.js"


export const vehicleroute=express.Router()

//http://localhost:9999/api/addvehicle
vehicleroute.post("/addvehicle",vehicleController)

vehicleroute.get("/getallcars",getAllcars)

vehicleroute.put("/updatevehicle",updateVehicle)

vehicleroute.delete("/deleteVehicle/:id",DeleteVehicle)

