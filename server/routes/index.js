var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/aboutus', function(req, res, next) {
  res.render('aboutus', {
    title: 'About Us', 
  })
});

router.get('/services', function(req, res, next) {
  res.render('services', {
    title: 'Products & Services', 
  })
});

router.get('/casestudies', function(req, res, next) {
  res.render('casestudies', {
    title: 'Home', 
  })
});

router.get('/downloads', function(req, res, next) {
  res.render('downloads', {
    title: 'Home', 
  })
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {
    title: 'Home', 
  })
});

router.get('/seminar', function(req, res, next) {
  res.render('seminar', {
    title: 'Home', 
  })
});



module.exports = router;
