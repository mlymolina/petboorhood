const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

var dogSchema = mongoose.Schema({
  age: Number,
  name: String,
  monthAge: Number,
  pic: String,
  description: String,
  breed: String,
  status: Boolean,
  owner: {
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    username: String
  }
});

const Dog = mongoose.model('Dog', dogSchema);
module.exports = Dog;
