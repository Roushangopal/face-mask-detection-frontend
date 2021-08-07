const express = require("express");
var nodemailer = require('nodemailer');


var smtpTransport = mailer.createTransport("SMTP",{
  service: "hotmail",
  auth: {
      user: "facemaskdetection@hotmail.com",
      pass: "vkit2021"
  }
});

var mail = {
  from: "facemaskdetection@hotmail.com",
  to: "sujaypangari1998@gmail.com",
  subject: "Send Email Using Node.js",
  text: "Node.js New world for me",
  html: "<b>Node.js New world for me</b>"
}

smtpTransport.sendMail(mail, function(error, response){
  if(error){
      console.log(error);
  }else{
      console.log("Message sent: " + response.message);
  }

  smtpTransport.close();
});
