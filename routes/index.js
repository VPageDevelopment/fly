var express = require('express');
var router = express.Router();
const { 
        renderIndex,
        registerUser,
        loginUser
      } = require("../controllers/Welcome");

/* GET home page. */
router.get('/', renderIndex);

// post for register ...
router.post('/register', registerUser);
// post for login 

router.post('/login', loginUser);

module.exports = router;