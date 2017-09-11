var express = require('express');
var router = express.Router();

// send requests to the proper controller
router.use('/contact', require('./contact-forms'));
router.use('/posts', require('./posts'));
router.use('/users', require('./users'));

// any requests to the /api path will go here
router.get('/', function(req, res) {
  res.send('This is the /controllers/index.js file');
});

module.exports = router;
