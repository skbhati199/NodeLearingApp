var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello Sonu Kumar', mess : 'Learningnsldmf ' });
});

module.exports = router;
