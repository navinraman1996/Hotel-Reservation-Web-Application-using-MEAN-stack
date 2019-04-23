//route for user authentication

const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const User=require("../models/user");
const bcrypt=require('bcrypt');



//password is stored in the plaintext form here in the database
router.post('/signup',(req,res,next)=>{
    bcrypt.hash(req.body.password,10,(err,hash)=>{
        if(err){
               return res.status(500).json({
                   error:err
               });
            } else{
                const user=new User({
                    _id:new mongoose.Types.ObjectId(),
                    email:req.body.email,
                    //salting is added so that our password cannot be added in the dictionary table
                    password:hash
                });
                user.save().then(result=>{
                    console.log(result);
                    res.status(201).json({
                        message:"User created"
                    });
                })
                .catch(err=>{
                    console.log(err);
                    res.status(500).json({
                        error:err
                    });
                })
            }      
      });

  });

module.exports=router;