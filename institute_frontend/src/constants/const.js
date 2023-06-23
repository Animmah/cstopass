let API="http://localhost:4000";

if(process.env.NODE_ENV==="production"){
    API="https://cstopass.herokuapp.com";
}
export default API;