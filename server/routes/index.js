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

router.get('/material', function(req, res, next) {
    res.render('material', {
        title: 'Material'
    });
});

router.get('/design', function(req, res, next) {
    res.render('design', {
        title: 'Design'
    });
});

router.get('/processing', function(req, res, next) {
    res.render('processing', {
        title: 'Processing'
    });
});

router.get('/testing', function(req, res, next) {
    res.render('testing', {
        title: 'Testing'
    });
});

router.get('/management', function(req, res, next) {
    res.render('management', {
        title: 'Management'
    });
});

router.get('/funding', function(req, res, next) {
    res.render('funding', {
        title: 'Funding'
    });
});

router.get('/case-studies', function(req, res, next) {
    res.render('case-studies', {
        title: 'Case Studies'
    });
});

router.get('/aboutus', function(req, res, next) {
    res.render('aboutus' , {
        title: 'About Us'
    });
});

router.get('/about-widl', function(req, res, next) {
    res.render('about-widl' , {
        title: 'About Widl'
    });
});

module.exports = router;
