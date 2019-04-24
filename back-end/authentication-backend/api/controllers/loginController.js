//These are added to the logincontroller so as to use them here
const Login = require('../models/loginModel');
const mongodb = require('mongodb');
const loginService = require('../services/loginServices');

//exporting the gethome from the get method defined in the routes
exports.gethome = (req, res, next) => {
    const resolve = (docs) => {

        res.status(200);
        res.send('Welcome to the express server...');
    };
    loginService.then(resolve)
};

//exporting postuser from the post method defined in the routes
exports.postuser = (req, res, next) => {
    const resolve = (result) => {
        console.log(result);
        res.status(201).json({
            message:'User account created',
            createdUser: {
                username: result.username,
                email: result.email,
                password: result.password
            }
            }
        )
    };
    let user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };
    loginService.save(user).then(resolve);
    let count = 0;    
    users.find({}).toArray((err, Users) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        for(let i = 0; i < Users.length; i++){
            if(Users[i].username == user.username)
            count++;
        }
        // Add user if not already signed up
        if(count == 0){
            users.insert(user, (err, User) => {
                if(err){
                    res.send(err);
                }
                res.json(User);
            });
        }
        else {
            res.json({ user_already_signed_up: true });
        }
    });
}
//exporting postlogin from the post method defined in the routes
exports.postlogin = (req, res) => {
    const resolve = (result) =>{
        console.log(result);
        res.status(201).json({
            message:'User logged in successfully'
            }
        )
    }
    loginService.then(resolve);
    let isPresent = false;
    let correctPassword = false;
    let loggedInUser;

    users.find({}).toArray((err, users) => {
        if(err) return res.send(err);
        users.forEach((user) => {
            if((user.username == req.body.username)) {
                if(user.password == req.body.password) {
                    isPresent = true;
                    correctPassword = true;
                    loggedInUser = {
                        username: user.username,
                        email: user.email
                    }    
                } else {
                    isPresent = true;
                }
            }
        });
        // Send response accordingly
            res.json({ isPresent: isPresent, correctPassword: correctPassword, user: loggedInUser });
    });
}

//exporting getuser from the get method defined in the routes
exports.getuser = (req, res, next) => {
    const resolve = (result) => {
        console.log(result);
        res.status(201).json({
            message:'user retrieved'
        })
    }
    users.find({}, {username: 1, email: 1, _id: 0}).toArray((err, users) => {
        if(err) {
            res.send(err);
        }
        res.json(users);
    });
}

//exporting getroom from the get method defined in the routes
exports.getroom = (req, res, next) => {
    const resolve = (result) => {
        console.log(result);
        res.status(201).json({
            message:'room retrieved'
        })
    }
    let room = req.params.room;
    chatRooms.find({name: room}).toArray((err, chatroom) => {
        if(err) {
            console.log(err);
            return false;
        }
        res.json(chatroom[0].messages);
    });
}