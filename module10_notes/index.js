var express = require('express');
var app = express();
var usersRouter = require('./users.js');

// Simple request time logger
// activated for every single request
app.use(function(req, res, next) {
    console.log("A new request received at " + Date.now());
    next();
});

app.use('/users', function(req, res, next) {
    console.log("A USERS request was made.");
});

app.use('/users', usersRouter);

// Connect the users router to the uerers path
app.use(express.static('public'));

// Express can handle requests for specific types of requests and routes.
// When a request is made at a url the specific callback function runs.
// app.method(path, handler)

app.get('/', function(req, res) {
    res.send("Welcome to the Main page.\n");
});

// app.get('/users', function(req, res) {
//     res.send("Show a list of all users.\n");
// });

// app.post('/users', function(req, res) {
//     res.send("Add a new user to the system.\n");
// });

// app.put('/users', function(req, res) {
//     res.send("Modify an existing user on the system.\n");
// });

// app.delete('/users', function(req, res) {
//     res.send("Delete a user from the system.\n");
// });

// // id should be a number. Use pattern matching expressions
// // id should have digits 0 through 9 and 5 numbers.
// app.get('/users/:id([0-9]{5})', function(req, res) {
//     res.send("The request you specified is " + req.params.id);
// });

// webbrowsers are good for GET requests but we need to 
// use curl for other requests.

// app.get('/users', function(req, res) {
//     res.send("A list of all the users!");
// });

// // Post is what happens when you fill out and submit a form
// app.post('/hello', function(req, res){
//     res.send("You just called the post method at hello.");
// });

// curl allows you to make any sort of http request.
// http is a transfer protocol uset to transfer html documents.
// https is secured unencrypted protocol.
// you can have a get and post request for the same route

// 4 most common
// GET, POST, PUT, DELETE work like CRUD operations
// GET = READ
// PUT = UPDATE
// DELETE = DELETE
// POST = CREATE

// Using GET should only retreive data, never create data.

// app.get('/hello', function(req, res) {
//     res.send("You just used GET on /hello!\n");
// });

// Express allows you to create a folder for static files like images

app.use("*", function(req, res) {
    res.status(404);
    res.send("404 - Not Found");
});

app.listen(3000);