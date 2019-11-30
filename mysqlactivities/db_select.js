var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user: "nthnl",
    password:"Admin_1290",
    database: "mydb"
});

con.connect(err =>{
    if(err) throw (err);
   con.query("SELECT * FROM customers ORDER BY id", (err, result, fields)=>{
       if(err) throw (err);
       console.log(result);
   })
})