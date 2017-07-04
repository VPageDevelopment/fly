var express = require('express');
var router = express.Router();

const {userDashboard} = require('../controllers/User'); 
/* GET user dashboard  page. */
router.get('/dashboard/:id?',userDashboard);

module.exports = router;