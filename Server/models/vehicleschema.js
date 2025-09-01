// models/Vehicle.js
import { Schema, model } from "mongoose"


const VehicleSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  fueltype:{
    type:String,
    require:true
  },
  registrationNumber: {
    type: String,
    required: true,
  },
  hourlyRate: {
    type: Number,
    required: true
  },
  features:{
    type:String,

  },
  availability: {
    type: Boolean,
    default: true
  },
  bookedTimeSlots: [{
    startDate: { type: String },
    endDate: { type: String }
  }],
  totalhours: {
    type: Number,
    
  },
  img1: {
    type: String
  },
  img2: {
    type: String
  },
  img3: {
    type: String
  }
}, {
  timestamps: true
}
);

const Vehicle = model('Vehicle', VehicleSchema);
export default Vehicle
