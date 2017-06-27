var express = require('express');
var router = express.Router();

/* GET User page. */
router.get('/dashboard', function(req, res, next) {
  res.render('user/dashboard');
});

module.exports = router;