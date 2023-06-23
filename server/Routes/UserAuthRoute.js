const { UserLogin } = require("../Controllers/UserAuthController");
// const { Signup} =require("../Controllers/UserAuthController");
const { UserVerification } = require("../Middlewares/UserAuthMiddleware");
const router = require("express").Router();

// router.post("/Signup",Signup);
router.post("/UserLogin",UserLogin);
router.post("/",UserVerification);
module.exports = router;