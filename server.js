//imports
const express = require("express");
//import express from 'express';
const router = express.Router();
const cors = require("cors");
//import cors from 'cors';
const nodemailer = require("nodemailer");
//import nodemailer from 'nodemailer';

const path = require("path");
//import path from 'path';
require("dotenv").config();
//import dotenv from 'dotenv';
//dotenv.config();


//server setup
const PORT = 3001;
const app = express();
app.use(express.json());
app.use("/", router);
app.use(express.static("public"));

//email setup
const contactEmail = nodemailer.createTransport({
  Service: 'gmail',
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

router.post("/contact", (req, res) => {
  console.log("recieved contact request");
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

app.listen(PORT, ()=> console.log(`server running on port ${PORT}`));

console.log("foobar");
  
