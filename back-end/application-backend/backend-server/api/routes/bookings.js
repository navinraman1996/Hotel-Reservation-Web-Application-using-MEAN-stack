//This file handles the booking related routes
const express=require('express');
//setting up the express router
const router=express.Router();

//importing mongoose
const mongoose=require('mongoose');
//to get the records of all the bookings
const multer=require('multer');
//to call the bookings controller
const BookingsController=require('../controllers/bookings')
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

router.get('/',BookingsController.bookings_get_all);
      
//to create a booking
router.post('/',BookingsController.bookings_create_bookings);
//to obtain a specific booking
router.get("/:bookingId",BookingsController.bookings_get_specific);

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
router.put('/:bookingId',upload.single('hotelImage'),BookingsController.bookings_update);
//to delete a specific booking
router.delete('/:bookingId',BookingsController.bookings_delete);



//the routers with the configured routes can be exported
module.exports=router;

