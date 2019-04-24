//Bringing togeather all the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const socket = require('socket.io');
const port = 3001;
const app = express();

let users;
let count;
let chatRooms;
let messagesArray = [];

// body-parser middleware
app.use(bodyParser.json());

const MongoClient = mongodb.MongoClient; 

// Allowing cross-origin sites to make requests to this API
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin' , 'http://localhost:4200');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append("Access-Control-Allow-Headers", "Origin, Accept,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.append('Access-Control-Allow-Credentials', true);
    next();
});

// Connecting to MongoDB
MongoClient.connect('mongodb+srv://chat_db:chat_db@chat-m9elf.mongodb.net/test?retryWrites=true', (err, Database) => {
    if(err) {
        console.log(err);
        return false;
    }
    console.log("Connected to MongoDB");
    const db = Database.db("Chat_App"); 
    
    // getting the users collection
    users = db.collection("users"); 
    
    /* getting the chatRooms collection. This collection would store chats in that room*/
    chatRooms = db.collection("chatRooms"); 
    
    // starting the server on the port number 3000 and storing the returned server variable 
    const server = app.listen(port, () => {
        console.log("Server started on port " + port + "...");
    });
    const io = socket.listen(server);

   /**
    *  'connection' is a socket.io event that is triggered when a new connection is 
       made. Once a connection is made, callback is called. 
    *  socket object allows us to join specific clients to chat rooms and also to catch
    *  and emit the events.
    */
    io.sockets.on('connection', (socket) => { 
        // 'join event'
        socket.on('join', (data) => {          
            socket.join(data.room);
            chatRooms.find({}).toArray((err, rooms) => {
                if(err){
                    console.log(err);
                    return false;
                }
                count = 0;
                rooms.forEach((room) => {
                    if(room.name == data.room){
                        count++;
                    }
                });
                // Create the chatRoom if not already created
                if(count == 0) {
                    console.log("creating chat room");
                    chatRooms.insert({ name: data.room, messages: [] }); 
                }
            });
        });
        // catching the message event
        socket.on('message', (data) => {
            // emitting the 'new message' event to the clients in that room
            io.in(data.room).emit('new message', {user: data.user, message: data.message});
            // save the message in the 'messages' array of that chat-room
            chatRooms.update({name: data.room}, { $push: { messages: { user: data.user, message: data.message } } }, (err, res) => {
                if(err) {
                    console.log(err);
                    return false;
                }
            });
        });
        // Event when a client is typing
        socket.on('typing', (data) => {
            // Broadcasting to all the users except the one typing 
            socket.broadcast.in(data.room).emit('typing', {data: data, isTyping: true});
        });
    });

});