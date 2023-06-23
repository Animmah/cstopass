const  User =require("../Models/DataModel"); //do not use braces for Data while maniulating data inside the database
const router = require("express").Router();

router.post("/passoutCreate",async(req,res)=>{
    try {
      const {email}=req.body;
      const existingUser = await User.findOne({email});
      if (existingUser) {
        return res.json({ message: "Email Exists" });
      }
      const user = await User.create(req.body);
      res.status(201).json({ message: "Created successfully", success: true, user });
    } catch (error) {
      console.error(error);
    }
});
router.post("/passoutDelete",async(req,res)=>{
    try{
        const passout=await User.findOneAndDelete({email:req.body.email});
        if(!passout){
            res.status(404).json({success:false,message:"No Account!"})
        }
        res.json({success:true,message:"Successfully deleted"})
    }
    catch(err){
        res.status(500).json({success:false, error:err.message})
    }
});
module.exports = router;