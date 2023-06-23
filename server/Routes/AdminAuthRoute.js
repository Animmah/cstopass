const { AdminLogin } = require("../Controllers/AdminAuthController");
const { Signup} =require("../Controllers/AdminAuthController");
const { AdminVerification } = require("../Middlewares/AdminAuthMiddleware");
const router = require("express").Router();

router.post("/signup",Signup);
router.post("/adminlogin",AdminLogin);
router.post("/",AdminVerification);

module.exports = router;