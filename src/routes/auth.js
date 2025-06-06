var express = require('express');
var router = express.Router();

/* GET auth example. */
router.get('/', function(req, res, next) {
  res.send('Welcome to the Auth API');
});

router.post('/signup', function(req, res, next) {

});

router.post('/login', function(req, res, next) {

});

module.exports = router;
