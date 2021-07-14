var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express by Danny!', name: req.query.name });
  var name = req.query.name; 
  res.send("Hello " + name + "! and this is the body " + JSON.stringify(req.body));
  console.log("name was " + name);
});

module.exports = router;
