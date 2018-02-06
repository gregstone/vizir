var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home.pug');
});

/* GET team. */
router.get('/team', function(req, res, next) {
  res.render('team.pug');
});

/* GET pricing */
router.get('/pricing', function(req, res, next) {
  res.render('pricing.pug');
});

/* GET contact */
router.get('/contact', function(req, res, next) {
  res.render('contact.pug');
});

/* POST form */
router.post('/contact',function(req, res){  
  // console.log(req.body);
	console.log(
    'you posted: First Name: ' + req.body.firstName +  
    ', Last Name: ' + req.body.lastName +  
    ', Message: ' + req.body.message + 
    ', Email: ' + req.body.email
  );
  res.redirect("/contact")
});



module.exports = router;
