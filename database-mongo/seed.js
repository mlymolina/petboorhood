const db  = require('./index.js');
const User =require('./Users.js');
const Dog =require('./Dogs.js');
const dogsSample= require('./dogSample.js');
const usersSample = require('./userSample.js');


const insertSampleUsers = function() {
  User.create(usersSample)
    .then(() => db.disconnect());
};

const insertSampleDogs = function() {
 Dog.create(dogsSample)
    .then(() => db.disconnect());
};

const deleteRecords = function() {
  Dog.remove().exec();
  User.remove().exec();
};

// deleteRecords();
insertSampleUsers();
insertSampleDogs(); 