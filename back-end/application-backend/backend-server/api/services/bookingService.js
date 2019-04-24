'use strict'

const Booking = require('../models/bookings');
const mongoose = require('mongoose');

// searching for the exact parameters in the data fields
exports.search = (params) => {
    const promise = Booking.find()
    .select('hotelname numberofguests roomtype ratings price description _id hotelImage')
    .exec();

    return promise;
};

// save function for saving a hotels in the database
exports.save = (hotel) => {

    const newHotel = new Booking(hotel);
    const promise = newHotel.save();
    return promise; 
};

// get function to get a hotel from the database
exports.get = (hotelId) => {

    const promise = Booking.findById(hotelId).exec();
    return promise;
};

// delete function to delete a contact to the database
exports.delete = (hotelId) => {
    const promise = Booking.remove({_id: hotelId});
    return promise;
}

exports.update = (id,data) => {
    const promise = Booking.update({ _id : id},
        {$set: data}).exec();
          return promise;
};