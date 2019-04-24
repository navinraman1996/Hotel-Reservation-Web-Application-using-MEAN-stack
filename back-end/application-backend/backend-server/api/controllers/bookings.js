
//importing the model
const Booking=require('../models/bookings')
//importing mongoose
const mongoose=require('mongoose');

const hotelService = require('../services/bookingService');

exports.bookings_get_all= (req,res,next) => {
    const resolve = (docs) => {
        res.status(200);
        res.json(docs);
    };
    hotelService.search({}).then(resolve).catch(renderErrorResponse(res));
};

exports.bookings_create_bookings = (req,res,next)=> {
    const resolve = (result) => {
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
                // hotelimage:result.hotelimage,
                request:{
                    type:'GET',
                            url:'http://localhost:3000/bookings/'+result._id
                }
            }
        });
    };
    const booking=new Booking({
        _id:new mongoose.Types.ObjectId(),
        hotelname: req.body.hotelname,
        numberofguests: req.body.numberofguests,
        roomtype:req.body.roomtype,
        ratings:req.body.ratings,
        price:req.body.price,
        description:req.body.description
        // hotelImage:req.file.path
    });
    hotelService.save(booking).then(resolve).catch(renderErrorResponse(res));
}

exports.bookings_get_specific = (req,res,next) => {

    console.log(req.params.bookingId);
    const bookid=req.params.bookingId;
    const resolve = (doc) => {
        res.status(200).json({
            product:doc,
            request:{
                type:'GET',
                description:'Get all products',
                url:'http://localhost:3000/bookings/'+bookid
            }
        });
    };
    hotelService.get(req.params.bookingId).then(resolve).catch(renderErrorResponse(res));
};


exports.bookings_delete = (req,res,next)=>{
    console.log(req.params.bookingId);

    const resolve = (hotel) => {
        res.status(200).json({
            message: 'Hotel deleted',
            result:{
                type:'POST',
                url:'http://localhost:3000/bookings/',
                body:{
                    hotelname:'String',numberofguests:'String',
                    roomtype:'String',ratings:'String',
                    price:'Number',description:'String',hotelImage:'String'
                }
            }
        });
    };
    hotelService.delete(req.params.bookingId).then(resolve).catch(renderErrorResponse(res));
};

//to update a booking
exports.bookings_update=(req,res,next)=>{
    const bookid=req.params.bookingId;
    console.log(bookid);
    const bodyjson = {hotelname:req.body.hotelname,
        numberofguests:req.body.numberofguests,
        roomtype:req.body.roomtype,
        ratings:req.body.ratings,
        price:req.body.price,
        description:req.body.description
        // productImage:req.file.path
          }
    
    const resolve = (hotel) => {
        res.status(200).json({
            message: 'Product updated',
              request:{
                type:'GET',
                url:'http://localhost:3000/bookings/'+bookid
            }
        })
    } 
    hotelService.update(req.params.bookingId, bodyjson).then(resolve).catch(renderErrorResponse(res));
}

/**
 * Throws error if error object is present.
 *
 * @param {Response} response The response object
 * @return {Function} The error handler function.
 */
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};