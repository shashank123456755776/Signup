const express=require("express");
const Routes =express.Router();
const userValid= require('../Validations/userValidation');
const {usersignup,myVerify}=require("../Controllers/usercontroller");//{}..this is way to import function 
const ValidatorResult = require('../Middlewares/ValidatorResult');
const Verify = require("twilio/lib/rest/Verify");

(()=>{
 getrequest();
 postrequest();
})();
function getrequest(){
    Routes.get("/verify",myVerify)
}
function postrequest(){
    // Routes.post("/login",uservalid.loginCheck() ,ValidatorResult,userlogin)
    Routes.post("/signup",userValid.signupcheck(),ValidatorResult,usersignup)
   
   
}
module.exports = Routes;