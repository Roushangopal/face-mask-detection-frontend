const express = require("express");
const peopleDetails = require("../models/people");

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
      res.json({ msg: "Failed", Error: err });
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

module.exports = router;
