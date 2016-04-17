var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Sound of Change',hero:'The Best Way to Share Music Across Any Platform',subhero:'Search for your current track #nowplaying',subhero2:'Woah, hang on, what is Son.gg?' });
  res.render('home', { title: 'DATA REPRESENTATION'})
  //res.send('d1.json'); send to client
});

router.get('/newreg', function(req, res, next) {
  res.render('registration');
});

module.exports = router;
