const { MongoClient } = require('mongodb');
const express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  // get the header values
  var date = new Date();
  var cv = req.get('cv') !== undefined ? req.get('cv') : 0.00; 
  var cc = req.get('cc') !== undefined ? req.get('cc') : 'USD';
  var oeg = req.get('oeg') !== undefined ? req.get('oeg') : 'Not Set';
  var gcl = req.get('gcl') !== undefined ? req.get('gcl') : 'Not Set';
  var fwbo = req.get('fwbo') !== undefined ? req.get('fwbo') : 'Not Set';
  var fwb = req.get('fwb') !== undefined ? req.get('fwb') : 'Not Set';
  var page_location = req.get('page_location') !== undefined ? req.get('page_location') : 'Not Set';
  var event = req.get('event') !== undefined ? req.get('event') : 'Not Set';


  // Connect to the database
  // Make this URI a ENV variable to hide password (or later even better security)
  const uri = "mongodb+srv://dannydykes:crQHaubvcNDnjgwF@cluster0.cvvus.mongodb.net/conversions?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  client.connect(function (err, db) {
    if (err) throw err;
    
    var dbo = db.db();
    var collection = dbo.collection('bd_client');
    collection.insertOne( { 
      date: date,
      cv: cv,
      cc: cc,
      oeg: oeg,
      gcl: gcl,
      fwbo: fwbo,
      fwb: fwb,
      page_location: page_location,
      event: event
    });
    db.close();
  });
});

module.exports = router;