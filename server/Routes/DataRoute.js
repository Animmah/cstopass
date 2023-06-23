const Data=require("../Models/DataModel");
const router=require('express').Router();

router.get("/fetchData",async(req,res)=>{
    try{
        const fetch= await Data.find();
        res.json(fetch);
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

module.exports=router;