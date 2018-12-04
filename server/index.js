const express = require('express');
const bodyParser = require('body-parser');
const User = require('../database-mongo/Users.js');
const Dog = require('../database-mongo/Dogs.js');

// var items = require('../database-mongo');

const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/dogs', function (req, res) {
  Dog.find(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});


app.listen(3000, function() {
  console.log(`listening on port 3000!`);
});

