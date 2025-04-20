var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('users', {title: "Users", word: "Corndog"});
});

router.get('/:id([0-9]{5})', function(req, res, next) {
  const userData = goFindUserData(req.params.id);
  res.render('users', {user: userData});
});

module.exports = router;
