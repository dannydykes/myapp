var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express by Danny!' });
  var name = req.params('name');
  res.send("Hello " + name + "!");
});

module.exports = router;
