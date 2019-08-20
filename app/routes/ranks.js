var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'foosball'
});

module.exports.get_ranks = function() {
  connection.connect();
   
  connection.query('SELECT * FROM Player', function(error, results, fields) {
  console.log(results);
  


});



};
