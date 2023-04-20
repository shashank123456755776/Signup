const { validationResult } = require("express-validator");
module.exports = (req, res, next) => {
  //Here we would take all the values from uservalidation as either dat is saved or not passed in validationresult as in req term 
    const mereresult = validationResult(req);
    if (!mereresult.isEmpty()) {
     res.status(200).send("error occurs")
    }
    else{
      next();
    }
};
