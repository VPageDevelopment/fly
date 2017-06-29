const { viewAllUsers } = require('../models/methods/User');

const userDashboard = (req,res,next) =>{
     viewAllUsers()
            .then((user)=>{
              console.log(user.mobileNumber)
            })
            .catch((e)=>{
              console.log(e)
            })
}

module.exports = {
    userDashboard
}