var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "nthnl",
  password: "Admin_1290"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});