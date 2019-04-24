'use strict';

//exporting datas and functions from routes and models folder
module.exports = (app) =>{
    let loginModel = require('./models/loginModel');
    const loginRoutes = require('./routes/loginRoutes');
    loginRoutes(app);
};