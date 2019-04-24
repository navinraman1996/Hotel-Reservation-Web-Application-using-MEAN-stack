/**
 * The purpose of "use strict" is to indicate that the code should be executed in "strict mode"
 * With strict mode, you can not, for example, use undeclared variables.
 */
'use-strict';
//adding the dependencies
const mongodb = require('mongodb');
const Schema = mongodb.Schema;
let loginSchema = new Schema({
    // _id: mongodb.Schema.Types.ObjectId,
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

module.exports = mongodb.model('Login', loginSchema);