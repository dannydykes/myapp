const { MongoClient } = require('mongodb');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  // Connect to the database
  // Make this URI a ENV variable to hide password (or later even better security)
  const uri = "mongodb+srv://dannydykes:crQHaubvcNDnjgwF@cluster0.cvvus.mongodb.net/conversions?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    var collection = client.db().collection('bd_client');

    var findResults;
    if (req.query.fwb) {
      // we have a id so use it in the filter
      console.log("req.fwb " + req.query.fwb);
      findResults = collection.find({ 'fwb': req.query.fwb });
    } else {
      findResults = collection.find({});
    }
    
    await new Promise(function (resolve, reject) {
      findResults.toArray(function(err, result) {
        if (err) reject(err);
        resolve(res.send(JSON.stringify(result)));
      });
    });

  } finally {
    await client.close();
  }
});

module.exports = router;