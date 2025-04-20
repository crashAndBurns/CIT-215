var express = require('express');
var app = express();
const port = 3000;
const error = "<h1>404 - URL Not Found</h1>";

// Middleware logger to get Date/Time, method, and URL requested
const logger = (req, res, next) => {
    var current_datetime = new Date();
    var formatted_date =
        current_datetime.getFullYear() + '/' +
        (current_datetime.getMonth() + 1) + '/' +
        current_datetime.getDate() + " " +
        current_datetime.getHours() + ":" +
        current_datetime.getMinutes() + ":" +
        current_datetime.getSeconds();
        var url = req.url;
        var log = formatted_date + ": " + url;

        console.log(log);
        next();
}

// activate middlware logger
app.use(logger);

// activate public static directory
app.use(express.static('public'));

// requrie Routers
const about = require('./about.js');
app.use('/about', about);
const owners = require('./owners.js');
app.use('/owners', owners);
const cars = require('./cars.js');
app.use('/cars', cars);

var path = '/';
const ul_links = '<ul>\
                    <li><a href="/">Main Page</a></li>\
                    <li><a href="/about">About The Assignment</a></li>\
                    <li><a href="/owners">List All Owners</a></li>\
                    <li><a href="/owners/new">Enter a New Car Owner</a></li>\
                    <li><a href="/owners/:id">List Details of a Single Owner</a></li>\
                    <li><a href="/owners/:id/edit">Edit Owner Details</a></li>\
                    <li><a href="/cars">Display a Graph of Cars</a></li>\
                </ul>';

app.get(path, function(req, res) {
    res.send('\
        <h1>Welcome to the Main page</h1>\
        <img src="https://wallpaperaccess.com/full/433423.jpg"/><br></br>' +
        ul_links);
});

app.put(path, function(req, res){
    res.send(error);
});

app.post(path, function(req, res){
    res.send(error);
});

app.delete(path, function(req, res){
    res.send(error);
});

app.use('*', function(req, res) {
    res.status(404);
    res.send(error);
});

app.listen(port, () => {
    console.log("Listening on port " + port);
})