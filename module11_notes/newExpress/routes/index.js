var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', word: "Corndog", meaningOfLife: 42 });
});

module.exports = router;
