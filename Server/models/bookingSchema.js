// models/Booking.js
import mongoose, { Schema,model } from "mongoose"

const BookingSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  vehicle_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle',
    required: true
  },
  bookedTimeSlots:[{startDate:{type:String},
    endDate:{type:String} }],
  totalhours: {
    type: Number,
    required: true
  },
  totalamount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    default: 'confirmed'
  },
  transactionId:{
    type:String,  
  },
  driverRequired:{
    type:Boolean
  }
 
},{
  timestamps:true
});

export const Bookingcar = model('Booking', BookingSchema);
