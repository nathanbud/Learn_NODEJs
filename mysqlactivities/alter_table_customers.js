var mysql = require('mysql');

con = mysql.createConnection({
    host: "localhost",
    user: "nthnl",
    password: "Admin_1290",
    database: "mydb"
});

con.connect(function(err){
    if(err)throw(err);
    console.log("Database Connected!");

    var sql = "ALTER TABLE customers ADD column id INT AUTO_INCREMENT PRIMARY KEY"; 

    con.query(sql, function(err, result){
        if(err) throw (err);
        console.log("Table Customers Altered");
    })
})