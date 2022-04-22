var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport'); 
var LocalStrategy = require('passport-local').Strategy; 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ElephantRouter = require('./routes/Elephant');
var addModsRouter = require('./routes/addmods');
var selectorouter = require('./routes/selector');
var Elephant = require("./models/Elephant");
var Resourcerouter = require('./routes/resource');


var app = express();


const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

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
app.use('/Elephant', ElephantRouter);
app.use('/addMods', addModsRouter);
app.use('/selector', selectorouter);
app.use('/resource', Resourcerouter);


// We can seed the collection if needed on 
//server start 
async function recreateDB() {
  // Delete everything 
  await Elephant.deleteMany();

  let instance1 = new
    Elephant({
      breed: "Indian Elephant", color: 'Black',
      height: 18
    });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });


  let instance2 = new
    Elephant({
      breed: "Asian Elephant", color: 'White',
      height: 15
    });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("second object saved")
  });


  let instance3 = new
    Elephant({
      breed: "African Elephant", color: 'Black',
      height: 22
    });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Third object saved")
  });
}

let reseed = true;
if (reseed) { recreateDB(); }

//Get the default connection 
var db = mongoose.connection;

//Bind connection to error event  
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function () {
  console.log("Connection to DB succeeded")
}
);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
