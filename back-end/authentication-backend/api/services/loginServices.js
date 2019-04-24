/**
 * The purpose of "use strict" is to indicate that the code should be executed in "strict mode"
 * With strict mode, you can not, for example, use undeclared variables.
 */
'use strict';
//Adding the dependencies
const Login = require('../models/loginModel');
const mongodb = require('mongodb');

//saving contacts 
exports.save = (contact) => {
    //creating a new contact user
    const newUser = new Login(contact);
    const promise = newUser.save();
    return promise;
};