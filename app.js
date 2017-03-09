var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var tianJiaShangPin = require('./routes/tianJiaShangPin');
var xianshishangpin = require('./routes/xianshishangpin');
var shouye = require('./routes/shouye');
var car = require('./routes/car');
var showcar = require('./routes/showcar');
var delete1 = require('./routes/delete1');
var deleteall = require('./routes/deleteall');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', index);
app.use('/', users);
app.use('/tianJiaShangPin', tianJiaShangPin);
app.use('/xianshishangpin', xianshishangpin);
app.use('/shouye', shouye);
app.use('/car', car);
app.use('/showcar',showcar);
app.use('/delete1',delete1);
app.use('/deleteal1',deleteall);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;
