// Program Name: Car Owners Database
// Author: Frank E. Ciszek
// Date: 4/18/2025
// Purpose: Create a template for a car owner database web app
// using express, routes, an PUG template generators. This time
// the routes will actually perform CRUD related tasks on a simple
// json database. 

const express = require('express');
const fs = require('fs');

var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var ownersRouter = require('./routes/owners');
var carsRouter = require('./routes/cars');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/owners', ownersRouter);
app.use('/cars', carsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Utility Functions
const saveUserData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync('./public/json/car_owners.json');
}

const getUserData = () => {
  const jsonData = fs.readFileSync('./public/json/car_owners.json');
  return JSON.parse(jsonData);
};


module.exports = app;
