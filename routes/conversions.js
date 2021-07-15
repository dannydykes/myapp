const { MongoClient } = require('mongodb');
const express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  // get the header values
  var cv = req.get('cv'); 
  var cc = req.get('cc');
  var oeg = req.get('oeg');
  var gcl = req.get('gcl');
  var fwb = req.get('fwb');
  var url = req.get('url');


  console.log(" here is what we heard: value " + cv + " oeg " + oeg + " cc " + cc + " gcl " + gcl + " fwb " + fwb);
  console.log("URL = " + url);

  // Connect to the DB
  connectDB();
});

async function connectDB() {
  // Connect to the database
  const uri = "mongodb+srv://dannydykes:crQHaubvcNDnjgwF@cluster0.cvvus.mongodb.net/sample_analytics?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  const result = await client.connect(function (err, db) {
      if (err) {
          console.log("We have a connection error: " + err);
          throw err;
      }
      var dbo = db.db();
      console.log("Have have dbo " + dbo.databaseName);

      var collection = dbo.collection('customers');
      console.log("collection = " + collection.collectionName);

      var result = collection.findOne({}, function (errors, result) {
          if (errors) {
              console.log(" Error!! " + errors);
              throw errors;
          }
          console.log(" found one! " + result);
          db.close();
      });
  });
}

module.exports = router;