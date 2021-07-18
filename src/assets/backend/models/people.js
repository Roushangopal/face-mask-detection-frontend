const mongoose = require('mongoose');

const schema = mongoose.Schema;

const peopleDetails = new schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  mob: {
    type: String,
    required: true,
    unique: true
  },
});

const people = mongoose.model('people', peopleDetails);

module.exports = people;
