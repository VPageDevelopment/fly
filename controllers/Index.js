const { createUser } = require('../models/methods/User');
const { getError } = require('../helper/Error');
const { hashPassword } = require('../helper/Auth');

// to render a welcome page ...
const renderIndex = (req,res,next) => {
  res.render('index');
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
                    req.flash('successMsg' , 'you are registered successfully.. ');
                    res.redirect(`/user/dashboard/${user.userID}`);
                  })
                  .catch((e)=>{
                    var vErr = getError(e); 
                    if(vErr) res.render('index', {errors:vErr})
                  })
      })
}


const loginUser = (req,res,next)=>{
    let 
      username = req.body.username,
      password = req.body.password;

    console.log(username + ' '+ password);
    // res.render('index');
}

module.exports = {
    renderIndex,
    registerUser,
    loginUser
}