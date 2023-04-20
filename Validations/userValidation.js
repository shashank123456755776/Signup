const {check} =require("express-validator");
const signupModel = require("../Models/signupModel")

exports.signupcheck= () => ([
    check('name').exists().withMessage("your name is not filled"),
    check('pwd').trim().notEmpty().withMessage('Password required')
    .isLength({ min: 9}).withMessage('password must be minimum 5 length')
    .matches(/(?=.*?[A-Z])/).withMessage('At least one Uppercase')
    .matches(/(?=.*?[a-z])/).withMessage('At least one Lowercase')
    .matches(/(?=.*?[#?!@$%^&*-])/).withMessage('At least one special character'),
   
    check('email').normalizeEmail().custom((async (email, { req }) => {
        const user = await signupModel.findOne({email});
        console.log(user)
      
        if(user == null) {
           return true
        } else {
           throw Error('User already exist')
        }
    })) 
]);
exports.validator=()=>([
    check('name').exists().withMessage("your name is not filled"),
    check('pwd').trim().notEmpty().withMessage('Password required')
    .isLength({ min: 9}).withMessage('password must be minimum 5 length')
    .matches(/(?=.*?[A-Z])/).withMessage('At least one Uppercase')
    .matches(/(?=.*?[a-z])/).withMessage('At least one Lowercase')
    .matches(/(?=.*?[#?!@$%^&*-])/).withMessage('At least one special character'),
   
    check('email').normalizeEmail().custom((async (email, { req }) => {
        const user = await signupModel.findOne({email});
        console.log(user)
      
        if(user == null) {
           return true
        } else {
           throw Error('User already exist')
        }
    })) 
])


