import React from "react";
import { Navigate} from "react-router-dom";
import jwt_decode from "jwt-decode";

//look in the userAuth for reasonings
const AdminAuth = ({children}) => {
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");
  // const payLoad=JSON.parse(token);
  // console.log(payLoad.role);
  if(!token )return <Navigate to="/admin-login"/>
  try {
    const decodedToken = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    // console.log(decodedToken.role);
    // console.log(currentTime);
    if (decodedToken.exp < currentTime || decodedToken.role!=="admin") { 
      return <Navigate to="/admin-login"/>;
    }
    return children;
  } catch (error) {
    return <Navigate to="/admin-login"/>;
  }
};

export default AdminAuth;
