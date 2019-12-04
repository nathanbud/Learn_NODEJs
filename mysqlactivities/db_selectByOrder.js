const mysql = require('mysql');
      
const con = mysql.createConnection({
    host: "localhost",
    user: "nthnl",
    password: "Admin_1290",
    database: "mydb"
});

con.connect(err=>{
    if(err) throw err;
    console.log("Database connected");
    con.query("SELECT * FROM customers ORDER BY address", (err, result)=>{
        if(err)throw err;
        console.log(result);
    });

});


