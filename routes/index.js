var express = require('express');
var router = express.Router();

const config = require("../config/index");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Metin', config });
});

module.exports = router;
