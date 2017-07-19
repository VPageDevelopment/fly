'use strict';

const passport = require('passport');
const flash = require('connect-flash');
const {suid} = require('rand-token');

const { createUser } = require('../models/methods/User');
const { getError } = require('../helper/Error');
const { hashPassword} = require('../helper/Auth');
const { Mailer } = require('../helper/Mailer');

// to render a welcome page ...

const renderIndex = (req,res,next) => {
  return res.render('index' , {title:'Fly',message:req.flash('error')});
};

const registerUser = (req,res,next) => {
 let username = req.body.username,
     mobileNumber = req.body.mobileNumber,
     email = req.body.email,
     password = req.body.password,
     confirmPassword = req.body.confirmPassword,
     terms = req.body.terms;

    if(mobileNumber.charAt(0) === '+'){
      mobileNumber = mobileNumber.substr(1);
    }
    const  emailToken = suid(64);
    // uncheck
    if (terms === undefined) terms = "No"
    hashPassword(password)
      .then((hashedPassword)=>{
            createUser(
                  username,
                  mobileNumber,
                  email,
                  hashedPassword,
                  terms,
                  emailToken
                ) .then((user)=>{
                      console.log(user.dataValues);
                      const 
                        currentUser = user.dataValues,
                        userID = user.userID;

                      // console.log(userObj.userID ,userObj.emailToken,userObj.email );
                       req.login(userID,(err)=>{
                        res.redirect(`/user/dashboard/${userID}`);
                      })
                  })
                  .catch((e)=>{
                    console.log(e);
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
        failureRedirect: '/',
        failureFlash : true
      });
}

module.exports = {
    renderIndex,
    registerUser,
    loginUser
}