var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'foosball'
});

module.exports.create_player = function() {
  connection.connect();
  console.log("hit");
};
