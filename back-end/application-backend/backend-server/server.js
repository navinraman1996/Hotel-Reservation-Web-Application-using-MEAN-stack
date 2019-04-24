//This file contains the setup for server
const http=require('http');
//we can change this to es6 module as well
const app=require('./app');
//we can import the app file we have set up
const port=process.env.PORT||3000;
//setting the port for our project
const server=http.createServer(app);
//creating and storing the server for our project with the request added
server.listen(port);
//server listen is used to start the server at a specific port number
