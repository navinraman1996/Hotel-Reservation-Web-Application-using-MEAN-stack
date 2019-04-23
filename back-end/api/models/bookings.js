//creating the model and schema for bookings
//importing mongoose
const mongoose=require('mongoose')

//Schema showing how the product will look like
const bookingSchema= mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    fname:{type:String,required:true},
    lname:{type:String,required:true},
    roomtype:{type:String,required:true},
    price:{type:Number, required:true},
    productImage:{type:String}
});
module.exports=mongoose.model('Booking',bookingSchema);