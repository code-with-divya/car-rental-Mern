import Vehicle from "../models/vehicleschema.js"

export const vehicleController = async (req, res) => {
   const { features, fueltype, type, brand, model, registrationNumber, hourlyRate, dailyRate, availability, img1, img2, img3 } = req.body
   try {
      
      const vehicledata = await Vehicle.create({
         "type": type,
         "brand": brand,
         "model": model,
         "registrationNumber": registrationNumber,
         "hourlyRate": hourlyRate,
         "dailyRate": dailyRate,
         "availability": availability,
         "img1": img1,
         "img2": img2,
         "img3": img3,
         "fueltype": fueltype,
         "features": features,

      })
      console.log(vehicledata)
      res.json({
         status: true,
         msg: "vehicle added",
         data: vehicledata,
      })
     
   }
   catch (e) {
      console.log(e)
   }
}

export const getAllcars = async (req, res) => {
   const userdata = await Vehicle.find()

   res.json({
      status: true,
      msg: "car data fetched",
      data: userdata
   }
   )
}


export const updateVehicle = async (req, res) => {
   try {
      const { vehicleId, type, brand, model, registrationNumber, hourlyRate, fueltype, features, img1, img2, img3 } = req.body;
      const updatedata = await Vehicle.updateOne({ _id: vehicleId }, {
         $set: {
            type: type,
            brand: brand,
            model: model,
            registrationNumber: registrationNumber,
            hourlyRate: hourlyRate,
            fueltype: fueltype,
            features: features,
            img1: img1,
            img2: img2,
            img3: img3
         }
      })
      res.json({
         sucess: true,
         msg: "vehicle updated",
         vehIcle: vehicleId,
         data: updatedata
      })
   }
   catch (e) {
      console.log(e)
   }
}

export const DeleteVehicle = async (req, res) => {
   try {
      const { id } = req.params;
      const DeleteVehicle = await Vehicle.deleteOne({ _id: id })
      res.json({
         sucess: true,
         data: `${id},`,
         data2: DeleteVehicle,
         msg: "Car deleted Successfully"
      })
   }
   catch (e) {
      console.log("V contro Delete", e)
   }
}

