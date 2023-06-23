const { StudentSignup} =require("../Controllers/UserAuthController");
const router = require("express").Router();

router.post("/StudentSignup",StudentSignup);

module.exports = router;