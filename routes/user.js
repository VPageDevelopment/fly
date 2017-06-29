var express = require('express');
var router = express.Router();
const { viewAllUsers } = require('../controllers/User');
/* GET User page. */
router.get('/dashboard', function(req, res, next) {
  viewAllUsers()
            .then((user)=>{
              console.log(user.mobileNumber)
            })
            .catch((e)=>{
              console.log(e)
            })

});

module.exports = router;