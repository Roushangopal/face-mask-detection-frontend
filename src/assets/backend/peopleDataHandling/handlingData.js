const request = require("request");
var fs = require("fs");
const express = require("express");
const peopleDetails = require("../models/people");
var mailer = require('nodemailer');

fs.readFile("people.csv", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    var peopleId = [];
    var timeOfPeople = [];
    data1 = data.toString().trim();
    console.log(data1);
    data2 = data1.split("\n");
    data2.forEach((element) => {
      element1 = element.split(",");
      id = element1[0].trim();
      t = element1[1].replace(/\r/, "");
      peopleId.push(id);
      timeOfPeople.push(t.trim());
    });
    // console.log(peopleId);
    // console.log(timeOfPeople);
    peopleId.forEach((element) => {
    peopleEmail = peopleDetails.findOne({ id : element}, {_id: 0, email: 1}, (err, people) => {
      if(people != null){
        email = (people.email).trim()
        console.log(email)

        //code for mail
        var smtpTransport = mailer.createTransport({
          service: "hotmail",
          auth: {
              user: "facemaskdetection@hotmail.com",
              pass: "vkit2021"
          }
        });

        var mail = {
          from: "facemaskdetection@hotmail.com",
          to: "sujaypangari1998@gmail.com,roushanraja26@gmail.com",
          subject: "Mask Warning",
          text: "Warning to wear your mask else a complaint against you will be registered"
        }

        smtpTransport.sendMail(mail, function(error, response){
          if(error){
              console.log(error);
          }else{
              console.log("Email sent");
              fs.openSync("people.csv", 'w')
          }

          smtpTransport.close();
        });
      }
    })
    });
  }
});
