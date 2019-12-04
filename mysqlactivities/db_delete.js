const mysql = require('mysql');

const conn = mysql.createConnection({
    host:"localhost",
    user:"nthnl",
    password:"Admin_1290",
    database: "mydb"
});

conn.connect(err =>{
    if(err)throw err;
    console.log("Database connected");

    conn.query("DELETE FROM customers WHERE id = 13", (err, result)=>{
        if (err) throw err;
        console.log(`Number of records deleted:${result.affectedRows}`);
        
    });

    
})