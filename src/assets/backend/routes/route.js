const express = require("express");
const peopleDetails = require("../models/people");
const spawn = require("child_process");
var mailer = require('nodemailer');
const router = express.Router();


router.get("/", (req, res, next) => {
  res.send("Roushan Raja");
});

router.get("/people", (req, res) => {
  peopleDetails.find({ id : req.body.id}, (err, people) => {
    res.json(people);
  });
});
router.post("/people", (req, res, next) => {
  let newPeople = new peopleDetails({
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    mob: req.body.mob,
  });

  newPeople.save((err, result) => {
    if (err) {
      res.json({ msg: "Failed", "Error": err });
    } else {
      res.json({ msg: "Success" });
    }
  });
});

router.get("/maskDetection", (req, res, next) => {
  spawn.exec('detect_mask_video.exe', {cwd: '../model/dist/detect_mask_video/'}, (err, stdout, stderr) => {
    if (err) {
      console.log(`error: ${err.message}`)
      return
    }
    if (stderr) {
      console.log(`error: ${stderr}`)
    }
    res.send(`stdout: ${stdout}`)
  })
});

router.get("/email", (req, res, next) =>{
// Use Smtp Protocol to send Email
var smtpTransport = mailer.createTransport({
  service: "hotmail",
  auth: {
      user: "facemaskdetection@hotmail.com",
      pass: "vkit2021"
  }
});

var mail = {
  from: "facemaskdetection@hotmail.com",
  to: "roushanraja26@gmail.com,sujaypangari1998@gmail.com",
  subject: "Mask Warning",
  text: "First warning to wear your mask else a complaint against you will be registered"
}

smtpTransport.sendMail(mail, function(error, response){
  if(error){
      console.log(error);
      res.json({"Status": "Email Not Sent", "Error": error})
  }else{
      console.log("Email sent: " + response.message);
      res.json({"Status": "Email Sent", "Msg": response.message})
  }

  smtpTransport.close();
});
});

module.exports = router;
