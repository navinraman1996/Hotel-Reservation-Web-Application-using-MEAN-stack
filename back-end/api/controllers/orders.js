const Order=require('../models/orders')
const Booking=require('../models/bookings')
const mongoose=require('mongoose');


//controller to get all orders
exports.orders_get_all=(req,res,next)=>{
    Order.find()
       .select('booking quantity _id')
        .populate('booking','fname')
       .exec()
       .then(
           docs =>{
               res.status(200).json({
                   count:docs.length,
                   orders:docs.map(doc=>{
                   return{
                       _id:doc._id,
                       booking:doc.booking,
                       quantity:doc.quantity,
                       request:{
                           type:'GET',
                       url:'http://localhost:3002/orders/'+doc._id
                   } } })   })
                   
                   }
                       
                       )
   .catch(err =>{
               
             res.status(500).json({
                   error:err
               }); 
           
           
           }); }


//creating a new order based on a booking id

exports.orders_create_order=(req,res,next)=>{
    Booking.findById(req.body.booking)
    .then(booking=>{
        if(!booking){
            return res.status(404).json({
                message:'Product not found',
            });
        }
       const order=new Order({
           _id:mongoose.Types.ObjectId(),
           booking:req.body.booking,
           quantity:req.body.quantity
       });
      return order.save();})
      .then(result =>{
           console.log(result);
           res.status(201).json({
               message:'Order stored',
               createdOrder:{
                   _id:result._id,
                   booking:result.booking,
                   quantity:result.quantity
               },
               request:{
                   type:'GET',
                   url:'http://localhost:3002/orders/'+result._id
               }
           });
       })
   

   
    .catch(err =>{
        res.status(500).json({
             message:'Product not found',
             error:err

        });
    });

   }           
   exports.orders_get_order=(req,res,next)=>{
    Order.findById(req.params.orderId)
    .populate('booking','fname')
    .exec()
    .then(order=>{
        if(!order){
            return res.status(404).json({
                message:"Order not found"
            });
        }
        res.status(200).json({
            order:order,
            request:{
                type:'GET',
                url:'http://localhost:3002/orders/'
            }
        });
    })
    
    .catch(err =>{
        res.status(500).json({
            error:err
        });
    });

    }