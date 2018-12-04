const express = require('express');
const bodyParser = require('body-parser');
const User = require('../database-mongo/Users.js');
const Dog = require('../database-mongo/Dogs.js');

const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/dogs', function (req, res) {
  Dog.find(function(err, pets) {
    if(err) {
      res.sendStatus(500);
    } else {
      User.findOne({id: 128}, function(error, user) {
        if(error) {
          res.sendStatus(500);
        } else {
          res.json({pets, user});
        }
      });  
    }
  });
});

app.put('/dog/update/status/:name', function (req, res) {
  Dog.findOneAndUpdate({name: 'Marly'}, {$set:{status: 1}}, function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json('Request Submitted')
    }
  });
});


app.listen(3000, function() {
  console.log(`listening on port 3000!`);
});

