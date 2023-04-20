const signupModel = require('../Models/signupModel');
// const twilio = require('twilio');
const meraotp = Math.floor(100000 + Math.random() * 900000);

exports.usersignup = async(req, res) => {
      const newUser = req.body;
      
      newUser.otp = meraotp//objects taking key as otp
      const user = await new signupModel(newUser) 
     const result= user.save()
      console.log(user)// in Db

      if(result){
        res.status(200).send("datab seved")
      }else{
        res.status(404).send("datab not seved")

      }
  }
  exports.myVerify = async (req, res) => {
    const {email,otp} = req.body;
    const user = await signupModel.findOne({email})
     
    if(req.body.otp==user.otp){
      res.status(200).send("verified")
    }
    else{
      res.status(400).send("not verified")
    }
 };


 

    