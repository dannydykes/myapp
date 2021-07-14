var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express by Danny!', name: req.query.name });
  var name = req.params.name; 
  console.log("Body was " + req.body);
  res.json(req.body);

  console.log("  name = " + name)
});

module.exports = router;
