'use strict';

const passport = require('passport');
const { findUserByID , checkActivationKey } = require('../models/methods/User');

const userDashboard = (req,res,next) =>{
    findUserByID(req.user).then((user)=>{
        const userObj = user[0].dataValues;
        console.log(userObj);
        console.log(req.user);
        res.render('user/dashboard' , {user:userObj ,title:"Dashboard"});
    })
  console.log(req.user);
  console.log(req.isAuthenticated());

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

module.exports = {
    userDashboard,
    logoutUser,
    notifyEmailVerification,
    activateUser
}