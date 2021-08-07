const express = require("express");
const peopleDetails = require("../models/people");
var mailer = require('nodemailer');

const peopleWithoutMask = require("../models/peopledb")
const spawn = require("child_process");
const router = express.Router();


router.get("/", (req, res, next) => {
  res.send("Roushan Raja");
});

router.get("/people", (req, res) => {
  peopleDetails.find({}, (err, people) => {
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
  spawn.exec('detect_mask_video.exe', { cwd: 'model/dist/detect_mask_video/' }, (err, stdout, stderr) => {
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

router.get("/peopleWithoutMask", (req, res, next) => {
  try {
    peoplewm = []
    peopleWithoutMask.find({}, (err, result) => {
      if (err) {
        res.json({ "status": err })
      }
      else {
        peopleId = JSON.parse(JSON.stringify(result))
        result.forEach((element, index, array) => {
          // console.log(element.id)
          peopleDetails.find({ id: element.id }, (err, people) => {
            people.forEach((element1) => {
              // console.log(element1.id)
              let people1 = { "id": element1.id, "name": element1.name, "email": element1.email, "mob": element1.mob, "time": element.time };
              // console.log(people1)
              peoplewm.push(people1)
              // console.log(peoplewm)
            })
          })
        })
      }
    })
  }
  finally{
    setTimeout(()=>{res.json(peoplewm)}, 4000)
  }
})

router.get("/deletePeopleWithoutMask", (req, res, next) => {
  peopleWithoutMask.deleteMany({}, (err, result) => {
    if (err) {
      res.json({ "status": err })
    }
    else {
      res.json({ "status": "success" })
    }
  })
})


module.exports = router;
