const passport = require('passport');

const { createUser } = require('../models/methods/User');
const { getError } = require('../helper/Error');
const { hashPassword , comparePassword} = require('../helper/Auth');

// to render a welcome page ...
const renderIndex = (req,res,next) => {
  res.render('index' , {title:'Fly'});
}

const registerUser = (req,res,next) => {
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

    // console.log(mobileNumber);

    // uncheck 
    if (terms === undefined) terms = "No"

    hashPassword(password)
      .then((hashedPassword)=>{
            createUser(
                  username,
                  mobileNumber, 
                  email, 
                  hashedPassword,
                  terms
                ) .then((user)=>{
                    // req.flash('successMsg' , 'you are registered successfully.. ');
                    const userID = user.userID ;
                    console.log(userID);
                    
                    req.login(userID ,(err)=>{
                      res.redirect(`/user/dashboard/${userID}`);
                    })

                  })
                  .catch((e)=>{
                    var vErr = getError(e); 
                    if(vErr) res.render('index', {errors:vErr})
                  })
      })
}

passport.serializeUser(function(userID, done) {
  done(null, userID);
});

passport.deserializeUser(function(userID, done) {
    done(null, userID);
});


const loginUser = () => {
    return passport.authenticate(
      'local', 
      { 
        successRedirect: '/user/dashboard',
        failureRedirect: '/'
      });
}



module.exports = {
    renderIndex,
    registerUser,
    loginUser
}