const express = require("express");
const route = express.Router();
const {signup , login} = require("../controllers/userController")


// signup
route.post("/signup" , signup)

//login
route.post("/login" , login)

//logout
route.post("/logout")

//refresh token
route.post("/refreshtoken")

//verify email
route.get("/verifyemail:token")

//forgot password
// route.post("/forgotpassword")

module.exports = route;