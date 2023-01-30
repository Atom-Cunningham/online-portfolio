//imports
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const path = require("path");
require("dotenv").config();

//server setup
const PORT = 3000;
const app = express();
app.use(express.json());
app.use("/", router);
app.use(express.static("public"));
app.listen(PORT, ()=> console.log("server running"));

//render
require('./index.js');

//exports
module.exports = app;

console.log("foobar");


//email setup
const contactEmail = nodemailer.createTransport({
    Service: 'gmail',
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    
    auth: {
        user: process.env.REACT_APP_EMAIL_ADDRESS,
        pass: process.env.REACT_APP_EMAIL_PASSWORD,
    }
});

contactEmail.verify((error) => {
    if(error){
        console.log("Could not verify recipient email address");
        console.log(error);
    }else{
        console.log("recipient email address verified");
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "***************@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });

