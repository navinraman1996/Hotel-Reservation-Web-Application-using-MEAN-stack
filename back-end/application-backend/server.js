//This file contains the setup for server
const http=require('http');
//we can change this to es6 module as well
const app=require('./app');
//we can import the app file we have set up
<<<<<<< HEAD
const port=process.env.PORT||3000;
=======
const port=process.env.PORT||3001;
>>>>>>> 716b5e84e417a273a62573d2ce6b6176eb8f6b3e
//setting the port for our project
const server=http.createServer(app);
//creating and storing the server for our project with the request added
server.listen(port);
//server listen is used to start the server at a specific port number
