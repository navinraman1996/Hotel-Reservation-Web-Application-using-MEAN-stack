'use strict';

const Login = require('../models/loginModel');
const mongodb = require('mongodb');

exports.save = (contact) => {

    const newUser = new Login(contact);
    const promise = newUser.save();
    return promise;
};