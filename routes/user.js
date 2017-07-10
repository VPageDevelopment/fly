'use strict';
var express = require('express');
var router = express.Router();
const {authenticationMiddleware} = require('../helper/Auth');
const {
        logoutUser,
        notifyEmailVerification
       } = require('../controllers/User');

const {userDashboard} = require('../controllers/User'); 
/* GET user dashboard  page. */
router.get('/dashboard/:id?', authenticationMiddleware(), userDashboard);

// Get route for logout the user from the dashboard ...

router.get('/notify-email-verification' , notifyEmailVerification);

router.get('/logout',logoutUser)

module.exports = router;