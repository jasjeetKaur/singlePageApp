var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log('You have clicked on signin');
});

///users/register
router.post('/register', function(req, res, next) {
  console.log('form recieved');
  res.send('thanks for sending data');
});

module.exports = router;
