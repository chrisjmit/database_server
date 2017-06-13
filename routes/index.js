var express = require('express');
var request = require('request');
var router = express.Router();
var Name = require('../models/name');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
