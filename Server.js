const Express = require('express');
const userRoutes = require('./Routes/userRoutes');
const Mongoose = require('mongoose');
const Cors = require('cors');
const app = Express();



  function initilizer(){
    corsConfig();
    parserConfig();
    dbConfig();
    routesConfig();
    // error404Handler();
    // globalErrorHandler();
  }
  initilizer();

//hoisting in not possible in case of arrow function 
//if we want to use arrow function then use it at the top before  call invoking function 
  function corsConfig(){
    app.use(Cors())
  }

  function parserConfig(){
    app.use(Express.json())
  }

  function dbConfig() {
    const url = 'mongodb+srv://ec19186:JnK15Gr4tbZqUmXS@mycluster.f0bpztv.mongodb.net/test';
    Mongoose.connect(url).then(() => {
        console.log("DB Connected successfully");
    });
}

  function routesConfig(){
    app.use('/',userRoutes);
  }

 module.exports=app;