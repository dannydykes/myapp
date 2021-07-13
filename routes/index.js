var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express by Danny!' });
  var name = req.query.name; 
  res.send("Hello " + name + "!");
  res.send("This is body: ");
  res.send(req.body);
});

module.exports = router;
