var express = require('express');
var router = express.Router();
const { 
        renderIndex,
        registerUser,
        loginUser
      } = require("../controllers/Index"),

      {loggedUserMiddleware} =require("../helper/Auth");

  

/* GET home page. */

router.get('/', loggedUserMiddleware(), renderIndex);

// post for register ...
router.post('/register', loggedUserMiddleware(), registerUser);

// post for login

router.post('/login', loggedUserMiddleware(), loginUser());


module.exports = router;