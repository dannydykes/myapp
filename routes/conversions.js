var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  // get the header values
  var cv = req.get('cv'); 
  var cc = req.get('cc');
  var oeg = req.get('oeg');
  var gcl = req.get('gcl');
  var fwb = req.get('fwb');


  console.log(" here is what we heard: value " + cv + " oeg " + oeg + " cc " + cc + " gcl " + gcl + " fwb " + fwb);
  console.log("IP = " + req.ip);
});

module.exports = router;