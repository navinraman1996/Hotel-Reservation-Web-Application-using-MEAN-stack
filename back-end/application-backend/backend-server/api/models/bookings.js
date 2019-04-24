//creating the model and schema for bookings
//importing mongoose
'use strict'
const mongoose=require('mongoose')
const Schema=mongoose.Schema;

//Schema showing how the product will look like
const bookingSchema= Schema({
    _id:mongoose.Schema.Types.ObjectId,
    hotelname:{type:String,required:true},
    numberofguests:{type:Number,required:true},
    roomtype:{type:String},
    ratings:{type:String,},
    price:{type:Number, required:true},
    description:{type:String,required:true}
    // hotelImage:{type:String}
    
});
module.exports=mongoose.model('Booking',bookingSchema);