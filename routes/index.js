var express = require('express');
var router = express.Router();
var Name = require('../models/name');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


function addName(req, res) {
  var name = new Name({
    name: req.body.name
  });
  name.save(function(err) {
    if(err) {
      res.json({'ERROR': err});
    } else {
      res.json({'SUCCESS': newName});
    }
  });
}

module.exports = router;
