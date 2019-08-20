var express = require('express');
var createPlayer = require("./createPlayer");
var playerStats = require("./playerStats");
var ranks = require("./ranks");
var createGame = require("./createGame");
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
  createPlayer.create_player();
});

/* GET player stats. */
router.get('/playerStats', function(req, res, next) {
  playerStats.player_stats();
});

/* GET all ranks. */
router.get('/ranks', function(req, res, next) {
  ranks.get_ranks();
});

/* POST create game. */
router.post('/createGame', function(req, res, next) {
  createGame.create_game();
});

module.exports = router;
