var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
      title: 'Home' 
  
  });
});

router.get('/customer', function(req, res, next) {
  res.render('customer', {
    title: 'Products & Services'
  });
});

router.get('/suppliers', function(req, res, next) {
    res.render('suppliers', {
        title: 'Suppliers'
    });
});

router.get('/talent', function(req, res, next) {
    res.render('talent', {
        title: 'Talent'
    });
});

router.get('/news', function(req, res, next) {
    res.render('news', {
        title: 'News'
    });
});


module.exports = router;
