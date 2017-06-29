var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressHbs = require('express-handlebars');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');

// importing dbConnection

const {sequelize} = require('./config/dbConnection');
// start the db sync ...
sequelize.sync();

// importing routes ...
var index = require('./routes/index');
var user = require('./routes/user.js');

// app init ..
var app = express();
// view engine setup
app.engine('.hbs',expressHbs(
	{
		defaultLayout:'layout',
		extname:'.hbs'
	})
);
app.set('view engine', '.hbs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Express Session 
app.use(session({
  secret: 'codepanda',
  resave: false,
  saveUninitialized: false,
  //cookie: { secure: true }
}))

// Passport initialization ...
app.use(passport.initialize());
app.use(passport.session());

// connect flash middleware
app.use(flash());

//set flash global variables in the response ...
app.use((req,res,nxt)=>{
  res.locals.successMsg = req.flash('successMsg');
  res.locals.errorMsg = req.flash('errorMsg');
  res.locals.error = req.flash('error');
  nxt();
});


// Appling route to the particular router ...

// login dashboard ..
app.use('/', index);

// user routes ...
app.use('/user' , user);

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