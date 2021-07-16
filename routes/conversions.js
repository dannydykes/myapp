const { MongoClient } = require('mongodb');
const express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  // Connect to the database
  // Make this URI a ENV variable to hide password (or later even better security)
  const uri = "mongodb+srv://dannydykes:crQHaubvcNDnjgwF@cluster0.cvvus.mongodb.net/conversions?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();

    var dbo = client.db();
    var collection = dbo.collection('bd_client');
    var result = await collection.insertOne({ 
      date: new Date(),
      cv: req.get('cv') !== undefined ? req.get('cv') : 0.00,
      cc: req.get('cc') !== undefined ? req.get('cc') : 'USD',
      oeg: req.get('oeg') !== undefined ? req.get('oeg') : 'Not Set',
      gcl: req.get('gcl') !== undefined ? req.get('gcl') : 'Not Set',
      fwbo: req.get('fwbo') !== undefined ? req.get('fwbo') : 'Not Set',
      fwb: req.get('fwb') !== undefined ? req.get('fwb') : 'Not Set',
      page_location: req.get('page_location') !== undefined ? req.get('page_location') : 'Not Set',
      event: req.get('event') !== undefined ? req.get('event') : 'Not Set'
    });
    console.log(`${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
});

module.exports = router;