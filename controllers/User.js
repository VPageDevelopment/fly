const passport = require('passport');
const { viewAllUsers } = require('../models/methods/User');

const userDashboard = (req,res,next) =>{
  const userID = req.params.id;
  console.log(req.user);
  console.log(req.isAuthenticated());
  res.render('user/dashboard' , {userID ,title:"Dashboard"});
}

const logoutUser = (req,res)=>{
    req.logout();
    req.flash('successMsg' , 'You are logout successfully.')
    res.redirect('/');
}

module.exports = {
    userDashboard,
    logoutUser
}