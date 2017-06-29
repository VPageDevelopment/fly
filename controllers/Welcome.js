const { createUser } = require('../models/methods/User');
const { getError } = require('../helper/error.js');

// to render a welcome page ...
const renderIndex = (req,res,next) => {
  res.render('index');
}

const registerUser = (req,res,next)=>{
 let 
    username = req.body.username,
    mobileNumber = req.body.mobileNumber,
    email = req.body.email,
    password = req.body.password,
    confirmPassword = req.body.confirmPassword,
    terms = req.body.terms;

    if(mobileNumber.charAt(0) === '+'){
      mobileNumber = mobileNumber.substr(1);
    }
    
    console.log(mobileNumber);

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
        req.flash('successMsg' , 'you are registered successfully.. ');
        res.redirect('/user/dashboard');
      })
      .catch((e)=>{
        var vErr = getError(e); // vErr stands for validation error ...
        console.log(vErr);

        // if it has any error //
        if(vErr) res.render('index', {errors:vErr})
      })
  
}


const loginUser = (req,res,next)=>{
    res.render('index');
}

module.exports = {
    renderIndex,
    registerUser,
    loginUser
}