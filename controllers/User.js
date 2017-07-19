'use strict';
const passport = require('passport');
const {findUserByID,checkActivationKey} = require('../models/methods/User');

const userDashboard = (req,res,next) =>{
    
  console.log(req.user);
  console.log(req.isAuthenticated());

    findUserByID(req.user).then((user)=>{
        const userO = user[0].dataValues;
        res.render(`user/dashboard`, {user:userO ,title:"Dashboard"});
    })

}

const logoutUser = (req,res)=>{
    req.logout();
    req.flash('successMsg' , 'You are logout successfully.')
    res.redirect('/');
}

const notifyEmailVerification = (req, res)=>{
    res.render('user/notifyUserEmailVerification');
}

const activateUser =(req,res)=>{
    const activateToken = req.params.activationKey;
    checkActivationKey(activateToken).then(r =>console.log(r));
}

//  vendor ...

const vendorIndex = (req, res)=>{
    res.render('user/vendor');
}


module.exports = {
    userDashboard,
    logoutUser,
    notifyEmailVerification,
    activateUser,
    vendorIndex,
}