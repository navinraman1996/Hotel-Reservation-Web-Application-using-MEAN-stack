//creating the model and schema for users for authentication
//importing mongoose
const mongoose=require('mongoose');

//Schema showing how the user will look like
const userSchema= mongoose.Schema({
    //unique id per order
    _id:mongoose.Schema.Types.ObjectId,
    //this is for user email
    email:{type:String,required:true},
    //this is for user password
    password:{type:String,required:true}
   
});
module.exports=mongoose.model('User',userSchema);