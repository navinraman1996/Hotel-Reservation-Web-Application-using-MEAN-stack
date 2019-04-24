
//importing the model
const Booking=require('../models/bookings')
//importing mongoose
const mongoose=require('mongoose');
//to get all the details available
exports.bookings_get_all=(req,res,next)=>{
      
    Booking.find()
    //to define which specific field you want to select
    .select('hotelname numberofguests roomtype ratings price description _id hotelImage')
    .exec().then(docs =>{
        //to count the number of records
        const response={
            count:docs.length,
            bookings:docs.map(doc=>{
                return{
                    hotenumberofguests:doc.hotenumberofguests,
                    numberofguests:doc.numberofguests,
                    roomtype:doc.roomtype,
                    ratings:doc.ratings,
                    price:doc.price,
                    description:doc.description,
                    hotelImage:doc.productImage,
              
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
}
//to create a new deatil of a hotel
exports.bookings_create_bookings=(req,res,next)=>{
    console.log(req.file);
 //booking object created with the help of mongoose
    const booking=new Booking({
        _id:new mongoose.Types.ObjectId(),
        hotelname: req.body.hotelname,
        numberofguests: req.body.numberofguests,
        roomtype:req.body.roomtype,
        ratings:req.body.ratings,
        price:req.body.price,
        description:req.body.description,
        hotelImage:req.file.path

    });
    //to store the data of the given type in the database
    booking
    .save()
    .then(result=>{
        console.log(result);
        res.status(201).json({
            message:'Created booking information successfully',
            createdBooking:{
                hotelname:result.hotelname,
                numberofguests:result.numberofguests,
                roomtype:result.roomtype,
                ratings:result.ratings,
                price:result.price,
                description:result.description,
                hotelimage:result.hotelimage,
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
}
//to get specific details
exports.bookings_get_specific=(req,res,next)=>{
    //This will extract the booking id 
    const bookid=req.params.bookingId;
    Booking.findById(bookid)
    
    .select('hotelname numberofguests roomtype ratings price productImage')
    .exec()
    .then(doc =>{
        console.log('From the database',doc);
        if(doc){
        res.status(200).json({
            product:doc,
            request:{
                type:'GET',
                description:'Get all products',
                url:'http://localhost:3000/bookings/'+bookid
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
}
//to update a booking
exports.bookings_update=(req,res,next)=>{
    const bookid=req.params.bookingId;
    console.log(bookid);
    //const updateOps={};
    // for(const ops of req.body){
    //     updateOps[ops.propName]=ops.value;
    // }
     Booking.update({ _id:bookid},
        {$set:{hotelname:req.body.hotelname,
        numberofguests:req.body.numberofguests,
        roomtype:req.body.roomtype,
        ratings:req.body.ratings,
        price:req.body.price,
        description:req.body.description,
        productImage:req.file.path
          }})
        // {$set:updateOps})
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
    }
    //to delete a specific booking
    exports.bookings_delete=(req,res,next)=>{
        const bookid=req.params.bookingId;
        
        Booking.remove({_id:bookid}).exec()
        .then(result =>{
            res.status(200).json({
                message:'Product deleted',
                result:{
                    type:'POST',
                    url:'http://localhost:3000/bookings/',
                    body:{
                        hotelname:'String',numberofguests:'String',
                        roomtype:'String',ratings:'String',
                        price:'Number',description:'String',hotelImage:'String'
                      }} })
         .catch(err=>{
              console.log(err);
              res.status(500).json({
                  error:err
              });
          });
        });
    }