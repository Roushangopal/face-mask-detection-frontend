const peopledbDetails = require("../models/peopledb");
const request = require("request");
var fs = require("fs");
const express = require("express");
const peopleDetails = require("../models/people");
var mailer = require('nodemailer');
// var file = require('../../../../../faceRecognition/Withoutmask.csv')

try {
  fs.readFile("../../../../dist/detect_mask_video/faceRecognition/Withoutmask.csv", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      var peopleId = [];
      var timeOfPeople = [];
      data1 = data.toString().trim();
      // console.log(data1);
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
      peopleId.forEach((element, index) => {
        // request.get(
        //   "http://localhost:3000/people",
        //   { json: { id: element } },
        //   (err, res, body) => {
        //     if (err) {
        //       console.log(err);
        //     } else {
        //       console.log(body);
        //     }
        //   });
        let newPeople = new peopledbDetails({ id: element, time: timeOfPeople[index] })
        newPeople.save((err, res) => {
          if (err) {
            console.log("User already Exist")
          }
          else {
            console.log("success entering into peopledb")
            fs.writeFile("../../../../faceRecognition/Withoutmask.csv","1vk17cs000,00:00:00", (err, data) => {
              if(err){
                console.log(err)
              }
              else{

              }
            })
          }
        })
      });
    }
  });

}
catch(error){
  console.log("error")
}

