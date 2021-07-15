const { MongoClient } = require('mongodb');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  // Connect to the database
  // Make this URI a ENV variable to hide password (or later even better security)
  const uri = "mongodb+srv://dannydykes:crQHaubvcNDnjgwF@cluster0.cvvus.mongodb.net/conversions?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  
  var data = [];
  client.connect(function (err, db) {
    if (err) throw err;
    
    var dbo = db.db();
    var collection = dbo.collection('bd_client');

    var findResults;
    if (req.query.event) {
      // we have a id so use it in the filter
      findResults = collection.find({'event':req.query.event});
    } else {
      findResults = collection.find({});
    }

    findResults.toArray(function(err, result) {
      if (err) throw err;
      res.render('index', { event : req.query.event ? req.query.event : '', results : result });
      db.close();
    });
  });
});

module.exports = router;
