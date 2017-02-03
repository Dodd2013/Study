var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.jsonp({msg:'login success!'});
});
module.exports = router;