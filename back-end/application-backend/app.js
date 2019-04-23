//This is the file which will spin up the express application thereby making the handling of requests easier 
const express=require('express');
//express is executed here which will spin up the express application
const app=express();
//importing morgan
const morgan =require('morgan');
//importing the body parser
const bodyParser=require('body-parser');
//importing mongoose
const mongoose=require('mongoose')

//importing the booking route by specifying the path for handelling different types of requests
const bookingRoutes=require('./api/routes/bookings');
const orderRoutes=require('./api/routes/orders');
<<<<<<< HEAD
=======

const userRoutes=require('./api/routes/user');
>>>>>>> 716b5e84e417a273a62573d2ce6b6176eb8f6b3e
//connecting to the database
mongoose.connect('mongodb+srv://assignment_8:'+process.env.MONGO_ATLAS_PW+'@cluster0-5ffvf.mongodb.net/test?retryWrites=true',
{useNewUrlParser:true}
);
mongoose.Promise=global.Promise;
//adding the logger middleware
app.use(morgan('dev'));
//adding the body parser middleware
app.use(bodyParser.urlencoded({extended:false}));
//to make json data easily readable
app.use(bodyParser.json());
//for giving access to any origin and setting headers for an incoming request
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Orgin','*');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');
 if(req.method==='OPTIONS'){
     res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
     return res.status(200).json({});

 }
    
next();
});
//middleware for forwarding the request

app.use('/bookings',bookingRoutes);
<<<<<<< HEAD
app.use('/uploads',express.static('uploads'));
 app.use('/orders',orderRoutes);
=======
//middleware for uploading pictures
app.use('/uploads',express.static('uploads'));
 app.use('/orders',orderRoutes);
 app.use('/user',userRoutes);
>>>>>>> 716b5e84e417a273a62573d2ce6b6176eb8f6b3e
// this is used to check if a particular route is not found amongst the fitting routes
app.use((req,res,next)=>{
      const error= new Error('Not found at all');
     error.status(404);
   next(error);
 });

//This will handle all kinds of errors thrown from application
app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message:error.message

        }

    });

});

module.exports=app;