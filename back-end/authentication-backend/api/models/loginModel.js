'use-strict';

const mongodb = require('mongodb');
const Schema = mongodb.Schema;
let loginSchema = new Schema({
    // _id: mongodb.Schema.Types.ObjectId,
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

module.exports = mongodb.model('Login', loginSchema);