const mongoose = require('mongoose');
const passportLocalMongoose   = require("passport-local-mongoose");
const db = require('./index.js');
mongoose.Promise = global.Promise;

var userSchema = mongoose.Schema({
  name: String,
  username: String,
  password: String,
  city: String,
  zipcode: Number,
  phone: Number,
  credits: Number,
  hasTakenCareOf: [],
  pendingTakeCareOf: []
});

userSchema.plugin(passportLocalMongoose);
var User = mongoose.model('User', userSchema);
module.exports = User;