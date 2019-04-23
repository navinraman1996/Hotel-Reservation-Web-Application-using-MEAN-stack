//This file handles the booking related routes
const express=require('express');
//setting up the express router
const router=express.Router();
//importing the model
const Booking=require('../models/bookings')
//importing mongoose
const mongoose=require('mongoose');
//to get the records of all the bookings
const multer=require('multer');
//detailed way to adjust  storing files by javascript
const storage=multer.diskStorage({
    destination:function(req, file, cb){
        cb(null,'./uploads/');

    },
    filename:function(req,file,cb){
        cb(null, file.originalname);

    }
});

//provision of adding file filters
// const fileFilter=(req,file,cb)=>{
//     if(file.mimetype==='image/jpeg'||file.mimetype==='image/png')
//        cb(null,true);
//        else
//        cb(null,false);
// };
const upload=multer({storage:storage});

router.get('/',(req,res,next)=>{
      
      Booking.find()
      //to define which specific field you want to select
      .select('fname lname roomtype price _id productImage')
      .exec().then(docs =>{
          //to count the number of records
          const response={
              count:docs.length,
              bookings:docs.map(doc=>{
                  return{
                      fname:doc.fname,
                      lname:doc.lname,
                      roomtype:doc.roomtype,
                      price:doc.price,
                      productImage:doc.productImage,
                      _id:doc._id,
                      request:{
                          type:'GET',
                          url:'http://localhost:3000/bookings/'+doc._id

                      }
                      


                  }
              })
          };
          console.log(docs);
    
            res.status(200).json(response);
         // }
            //  else{
            //      res.status(404).json({
            //          message:"No entries found"
            //      })
            //  }
        })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err

        });
    })
      });
      
//to create a booking
router.post('/',upload.single('productImage'),(req,res,next)=>{
    console.log(req.file);
 //booking object created with the help of mongoose
    const booking=new Booking({
        _id:new mongoose.Types.ObjectId(),
        fname: req.body.fname,
        lname: req.body.lname,
        roomtype:req.body.roomtype,
        price:req.body.price,
        productImage:req.file.path

    });
    //to store the data of the given type in the database
    booking
    .save()
    .then(result=>{
        console.log(result);
        res.status(201).json({
            message:'Created booking information successfully',
            createdBooking:{
                fname:result.fname,
                lname:result.lname,
                roomtype:result.roomtype,
                price:result.price,
                
                request:{
                    type:'GET',
                          url:'http://localhost:3000/bookings/'+result._id


                }
            }
          });
      })
  .catch(err=>{
        console.log(err);
    res.status(500).json({
    
        error:err
    });

});
});
//to obtain a specific booking
router.get("/:bookingId",(req,res,next)=>{
    //This will extract the booking id 
    const bookid=req.params.bookingId;
    Booking.findById(bookid)
    
    .select('fname lname roomtype price productImage')
    .exec()
    .then(doc =>{
        console.log('From the database',doc);
        if(doc){
        res.status(200).json({
            product:doc,
            request:{
                type:'GET',
                description:'Get all products',
                url:'http://localhost:3000/bookings/'


            }
        });
        }else{
            res.status(404).json({message:'No valid entry found for provided ID '});
        }
    })
    .catch(err=>
        {console.log(err);
            res.status(500).json({
                 error:err
            })
    
});
});

    // if(bookid==='special'){
    //     res.status(200).json({
    //         message:'You discovered a special id',
    //         bookid:bookid
    //     });
    // }else{
    //     res.status(200).json({
    //         message:'You discovered a  id',
    //         bookid:bookid

    //});

    
   // }
//});

//to update the bookings
router.patch('/:bookingId',(req,res,next)=>{
    const bookid=req.params.bookingId;
    const updateOps={};
    for(const ops of req.body){
        updateOps[ops.propName]=ops.value;
    }
    Booking.update({ _id:bookid},
        {$set:updateOps})
           .exec()
            .then(result=>{
            console.log(result);
            res.status(200).json({
                message: 'Product updated',
              request:{
                  type:'GET',
                  url:'http://localhost:3000/bookings/'+bookid
              }

                 });
                })

            .catch(err =>{
                console.log(err);
                res.status(500).json({
                    error:err
                });
            });
    });
//to delete a specific booking
router.delete('/:bookingId',(req,res,next)=>{
    const bookid=req.params.bookingId;
    
    Booking.remove({_id:bookid}).exec()
    .then(result =>{
        res.status(200).json({
            message:'Product deleted',
            result:{
                type:'POST',
                url:'http://localhost:3000/bookings/',
                body:{
                    fname:'String',lname:'String',
                    roomtype:'String',
                    price:'Number'
                  }} })
     .catch(err=>{
          console.log(err);
          res.status(500).json({
              error:err
          });
      });
    });
});



//the routers with the configured routes can be exported
module.exports=router;

