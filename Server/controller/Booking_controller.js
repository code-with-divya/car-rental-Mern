import { Bookingcar } from "../models/bookingSchema.js"
import Vehicle from "../models/vehicleschema.js"


export const Booking_controller = async (req, res) => {
    req.body.transactionId = "1234"
    // req.body.user_id = "66ae9ed1f206f37c34fe1abe"
    try {
        const newbooking = await Bookingcar.create(req.body)
        const carslots = await Vehicle.findByIdAndUpdate( req.body.vehicle_id,{
            $push: {
              bookedTimeSlots: req.body.bookedTimeSlots
            }},
            { new:true }
         )
         
        // carslots.bookedTimeSlots.unshift(req.body.bookedTimeSlots)

        res.json({
            status: true,
            data: newbooking,
            data2: carslots,
            msg: "car booked"
        })

    }
    catch (e) {
        res.send(e.message)
    }
}


export const booking_history = async (req,res )=>{
try{
    const carhistory = await Bookingcar.find()
    .populate("vehicle_id")
    .populate("user_id")
    res.json({
        status:true,
        data:carhistory,
        msg:"all car data"
    })
}
catch(error){
    res.send(error)

}

}
