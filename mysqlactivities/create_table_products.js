var mysql = require('mysql');

con = mysql.createConnection({
    host: "localhost",
    user: "nthnl",
    password: "Admin_1290",
    database: "mydb"
});

con.connect(function(err){
    if(err) throw (err);
    console.log('Dabase Connected!');

    var sql ="CREATE TABLE products(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), category VARCHAR(255))";
    
    con.query(sql, function(err, result){
        if(err) throw (err);
        console.log("Table Created");
    })
});