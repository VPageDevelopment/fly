var express = require('express');
var router = express.Router();


const { createUser } = require('../controllers/User');
const { getError } = require('../helper/error.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



// post for resgister ...
router.post('/register', function(req, res, next) {
  const 
    username = req.body.username,
    mobileNumber = req.body.mobileNumber,
    email = req.body.email,
    password = req.body.password,
    confirmPassword = req.body.confirmPassword;
    
    // to create a new user ...
    createUser(
      username ,
      mobileNumber , 
      email , 
      password , 
      confirmPassword
    ).catch((e)=>{
      getError(e);
      console.log( validatorError );
    })

});

// post for login 
router.post('/login', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
