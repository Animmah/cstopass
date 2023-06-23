require("dotenv").config();
const jwt = require("jsonwebtoken");
// will create the token 
module.exports.createSecretToken = (fromid,fromrole) => {
  const payload={
    id:fromid,role:fromrole
  }
  //previously i tried writing fromid as id and fromrole as role and gave
  //payload as{id, role} which did not work
  
  return jwt.sign(payload, process.env.TOKEN_KEY, {
    expiresIn: 60*60, //1 hr
  });
};