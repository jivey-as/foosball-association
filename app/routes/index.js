var express = require('express');
var router = express.Router();

exports.index = function(req, res){
  res.render('index', { title: 'ejs' });
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET vs page. */
router.get('/vs', function(req, res, next) {
  res.render('vs', { title: 'Express' });
});

/* POST create player. */
router.post('/createPlayer', function(req, res, next) {
  



  res.render('vs', { title: 'Express' });

});



module.exports = router;
