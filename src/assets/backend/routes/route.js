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

module.exports = router;
