const { viewAllUsers } = require('../models/methods/User');

const userDashboard = (req,res,next) =>{
  const userID = req.params.id;
  res.render('user/dashboard' , {userID});

}

module.exports = {
    userDashboard
}