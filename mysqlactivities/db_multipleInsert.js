var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    password:"Admin_1290",
    user:"nthnl",
    database: "mydb",
}); 

con.connect(function(err){
    if(err) throw (err);
    console.log('Database Connected');

    var sql = "INSERT INTO customers (name, address) VALUES ?";
    var values = [
        ['Nord', 'Tokyo'],
        ['Lord', 'Mobile Legends'],
        ['Hachimura', 'Okinawa'],
        ['Boss', 'Japan'],
        ['Nathan', 'Baguio'],
        ['Nate', 'US'],
        ['Hynder', 'Canada']
    ];

    con.query(sql,[values], function(err, result){
        if(err) throw err;
        console.log("Inserted to Customers. Rows:" + result.affectedRows + 'Id:' + result.insertId);
    });

});