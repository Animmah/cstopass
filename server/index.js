const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const adminAuthRoute = require("./Routes/AdminAuthRoute");
const userAuthRoute=require("./Routes/UserAuthRoute");
const signAuthRoute=require("./Routes/SignAuthRoute");
const passoutRoute=require("./Routes/PassoutCreateRoute");
const dataRoute=require("./Routes/DataRoute");
const PORT=process.env.PORT||4000;

app.use(cookieParser());
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/",userAuthRoute);
app.use("/",adminAuthRoute);
app.use("/",signAuthRoute);
app.use("/",passoutRoute);
app.use("/",dataRoute);
