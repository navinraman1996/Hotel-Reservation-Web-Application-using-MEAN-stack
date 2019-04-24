const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const details = require("./details.json");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(3002, () => {
  console.log("The server started on port 3002 !!!!!!");
});

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center'>Wellcome to backend<br><br></h1>"
  );
});

app.post("/sendmail", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendMail(user, info => {
    console.log(`The mail has beed sent and the id is ${info.messageId}`);
    res.send(info);
  });
});

async function sendMail(user, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "holidayresortsbooking@gmail.com",
      pass: "cehinyuujquxdopc"
    }
  });

  let mailOptions = {
    from: '"THE RESORTS"<bookingresorts.gmail.com>', // sender address
    to: user.email, // list of receivers
    subject: "Your Booking has been Confirmed!!!!!", // Subject line
    html: `<h1>Hi ${user.name}</h1><br>
    <h4>Thank you for booking with THE RESORTS</h4>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

// main().catch(console.error);
