'use strict';
var express = require('express');
var router = express.Router();
const {authenticationMiddleware} = require('../helper/Auth');
const {
        logoutUser,
        notifyEmailVerification,
        activateUser,
        userDashboard,
        vendorIndex
       } = require('../controllers/User');


/* GET user dashboard  page. */
router.get('/dashboard/:id?',authenticationMiddleware(),userDashboard);
// Get route for logout the user from the dashboard ...
router.get('/notify-email-verification', notifyEmailVerification);

router.post('accounts/activate/:activationKey', activateUser)

router.get('/logout',logoutUser);


//  Vendor 

router.get('/vendor',vendorIndex)

module.exports = router;