var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user: "nthnl",
    password: "Admin_1290"
});

con.connect(function(err){
    if (err) throw (err);
    console.log("Connected");
    /*Create a database name mydb */
    con.query("CREATE DATABASE mydb", function(err, result){
        if(err) throw (err);
        console.log("Database created");
    });
});