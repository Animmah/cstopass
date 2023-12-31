const User = require("../Models/AdminModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

//to create users hashing necessary

module.exports.AdminLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)

    if (!auth) {
      return res.json({message:'Incorrect password ' }) 
    }
     const token = createSecretToken(user._id,"admin");
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(201).json({ message: "Admin login successful", success: true });
     
     next();
  } catch (error) {
    console.error(error);
  }
}
