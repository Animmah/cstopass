import React from "react";
import { Navigate} from "react-router-dom";
import jwt_decode from "jwt-decode";

// all cookies will have the token so it is necessary to verify the token
// if the token is not present or expired Navigate to "/" or else to admin-page i.e passed though children

const UserAuth = ({children}) => {
    //gets token from the cookie
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");

    if(!token )return <Navigate to="/user-login"/>
    try {
      const decodedToken = jwt_decode(token);
      const currentTime = Date.now() / 1000;
      // console.log(decodedToken.role);
      // console.log(currentTime);
      // if the role is not specified then the admin can enter the user page and vice-versa based 
      // on the same login token with which the logged in
      if (decodedToken.exp < currentTime || decodedToken.role!=="user") { //.exp will give expiry
        return <Navigate to="/user-login"/>;
      }
      return children; //the component passed here it is the UserPage
    } catch (error) {
      return <Navigate to="/user-login"/>;
    }
  };

export default UserAuth;
