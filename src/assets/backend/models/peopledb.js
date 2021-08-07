const mongoose = require('mongoose');

const schema = mongoose.Schema;
try {
  const peopledbDetails = new schema({
    id: {
      type: String,
      required: true,
      unique: true
    },
    time: {
      type: String,
      required: true
    }
  });


  const peopledb = mongoose.model('peopledb', peopledbDetails);
  module.exports = peopledb;
}
catch (error) {
  console.log("error")
}

