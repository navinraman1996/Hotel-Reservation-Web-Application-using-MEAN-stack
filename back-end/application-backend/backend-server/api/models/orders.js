//creating the model and schema for orders based on which booking was ordered
//importing mongoose
const mongoose=require('mongoose');

//Schema showing how the product will look like
const orderSchema= mongoose.Schema({
    //unique id per order
    _id:mongoose.Schema.Types.ObjectId,
    //the type will be object id as it will store the id of the booking related to the order
    booking:{type:mongoose.Schema.Types.ObjectId,ref:'Booking',required:true},
    //quantity:{type:Number,required:true},
    quantity:{type:Number,default:1}
   
});
module.exports=mongoose.model('Order',orderSchema);