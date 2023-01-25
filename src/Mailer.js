/*
* Mailer.js
* Mailer react app class
* 
*/

//imports
import React from 'react';


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


class Mailer extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    }
    async handleSubmit(){
        const nameField = this.state.name;
        const emailField = this.state.email;
        const phoneField = this.state.phone;
        const messageField = this.state.message;
        let details = {
            name: nameField,
            email: emailField,
            message: messageField,
        };
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        let result = await response.json();
        alert(result.status);
    };

    render(){
        return(
            <div className = "Mailer">
                <head>the mailer will be inserted here</head>
            </div>
        );
    }
}


// TODO swap to react export
export default Mailer;