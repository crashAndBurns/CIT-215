var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('owners');
});

router.get('/new', function(req, res){
  res.render('owners_new');
});

router.post('/', function(req, res) {
  res.send("<h1>Used by form to add new owner to database.</h1>");
});

router.get('/:id', function(req, res) {
  res.render('owners_new_car');
});

router.put('/:id', function(req, res) {
  res.send("<h1>Used to update details of an owner<h1>");
});

router.get('/:id/edit', function(req, res) {
  res.render('owners_edit');
});

router.delete('/:id', function(req, res) {
  res.send("<h1>Used to remove a car owner from the database.</h1>")
})

module.exports = router;
