var express=require('express');
var router=express.Router();

router.get('/', function(req, res) {
    res.send("Welcome to the Main page.\n");
});

router.get('/', function(req, res) {
    res.send("Show a list of all users.\n");
});

router.post('/', function(req, res) {
    res.send("Add a new user to the system.\n");
});

router.put('/:id([0-9]{5})', function(req, res) {
    res.send("Modify an existing user on the system.\n");
});

router.delete('/:id([0-9]{5})', function(req, res) {
    res.send("Delete a user from the system.\n");
});

// id should be a number. Use pattern matching expressions
// id should have digits 0 through 9 and 5 numbers.
router.get('/:id([0-9]{5})', function(req, res) {
    res.send("The request you specified is " + req.params.id);
});

module.exports = router;