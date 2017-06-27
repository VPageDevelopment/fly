var express = require('express');
var router = express.Router();
const { createUser } = require('../controllers/User');
const { getError } = require('../helper/error.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
// post for resgister ...
router.post('/register', function(req, res, next) {
  let 
    username = req.body.username,
    mobileNumber = req.body.mobileNumber,
    email = req.body.email,
    password = req.body.password,
    confirmPassword = req.body.confirmPassword,
    terms = req.body.terms;

    // uncheck 
    if (terms === undefined) terms = "No"

    // to create a new user ...
    createUser(
      username,
      mobileNumber, 
      email, 
      password,
      terms
    ) .then(()=>{
        req.flash('successMsg' , 'you are registered successfully .. ');
        res.redirect('/user/dashboard');
      })
      .catch((e)=>{
        var vErr = getError(e); // vErr stands for validation error ...
        console.log(vErr);
        // if it has any error //
        if(vErr) res.render('index', {errors:vErr})
      })
      
});
// post for login 
router.post('/login', function(req, res, next) {
  res.render('index');
});
module.exports = router;