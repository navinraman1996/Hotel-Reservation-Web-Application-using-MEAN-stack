//to check whether the user is athenticated or not
const jwt=require('jsonwebtoken');
module.exports=(req,res, next)=>{
   // a given token is verified and decoded 
   try{
    const token =req.headers.authorization;
      // const token =req.headers.authorization.split(" ")[1];
       console.log(token);
    const decoded=jwt.verify(req.body.token, process.env.JWT_KEY);
    req.userData=decoded;
    next();
   }
catch(error){
    return  res.status(401).json({
        message:'Auth failed'
    });
}
};