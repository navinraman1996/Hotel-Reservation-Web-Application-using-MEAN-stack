/**
 * The purpose of "use strict" is to indicate that the code should be executed in "strict mode"
 * With strict mode, you can not, for example, use undeclared variables.
 */
'use strict';

//exporting datas and functions from routes and models folder
module.exports = (app) =>{
    //adding the dependencies
    let loginModel = require('./models/loginModel');
    const loginRoutes = require('./routes/loginRoutes');
    loginRoutes(app);
};