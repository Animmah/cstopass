const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email address is required"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  contact:{
    type:String,
    required:[true,"Contact number required"]
  },
  college: {
    type: String,
    required: [true, "Password is required"],
  },
  branch:{
    type:String,
    reuired: [true, "Specify the Branch"]
  },
  passing:{
    type:String,
    default: "-"
  },
  company:{
    type:String,
    default: "-"
  },
  other:{
    type:String,
    default:"-"
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Passout= mongoose.model("Passout", userSchema);

module.exports = Passout;