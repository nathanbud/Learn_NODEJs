var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "nthnl",
    password:"Admin_1290",
    database: "mydb"
})

con.connect(function(err){
    if(err) throw (err);
        console.log('Database Connected');
    var sql = "INSERT INTO customers (name, address) VALUES ('Company V', 'Gusaran\, Kabayan\, Benguet ')";

    con.query(sql, function(err, result){
        if(err) throw (err);
            console.log('Values inserted to mydb. Affected rows:' + result.affectedRows);
    });
});