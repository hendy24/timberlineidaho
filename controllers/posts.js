var express = require('express');
var router = express.Router();

var Post = require('../models/post');

router.get('/', (req, res) => {
  // fetch the recent blog posts
  Post.recent();
});

module.exports = router;
