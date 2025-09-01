// models/User.js
import mongoose, { Schema,model } from "mongoose"

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    // required: true
  },
  booking_history:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking'
  }]
},
{
  timestamps:true
})

const Usermodel = new model('User', UserSchema)
export default Usermodel