const {Schema, model} = require('mongoose');

const signupSchema = new Schema({
    name: {
        type: String,
        require: true
    }, 
    
    email:{
        type:String,
        require:true
    },
    pwd:{
     type:String,
     require:true
    },
    otp:{
        type:String,
        require:true
    }

    
});

signupModel = new  model('usermodels',signupSchema);
module.exports = signupModel; 