/*
* Mailer.js
* Mailer react app class
* 
*/

//imports
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();

//server setup
const app = express();
app.use(express.json());
app.use("/", router);
app.use(express.static(path.join(__dirname, '/public')));

//exports
module.exports = app;

console.log("foobar");


//email setup
const contactEmail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
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
