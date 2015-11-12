var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  console.log('in here');
  var db = req.db;
  var collection = db.get('todos');
  collection.find({}, {}, function (e, docs) {
    res.json(docs);
  });
});

module.exports = router;
