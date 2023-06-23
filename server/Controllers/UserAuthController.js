const User = require("../Models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

//to create users hashing necessary

module.exports.StudentSignup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "Account Exists!" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id,"user");

    res.status(201).json({ message: "Account Created!", success: true, user });
  } catch (error) {
    console.error(error);
  }
};

module.exports.UserLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password/email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)

    if (!auth) {
      return res.json({message:'Incorrect password ' }) 
    }
     const token = createSecretToken(user._id,"user");
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(201).json({ message: "Login successful", success: true });
     next();
  } catch (error) {
    console.error(error);
  }
}