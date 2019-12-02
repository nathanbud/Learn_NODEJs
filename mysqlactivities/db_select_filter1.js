const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: "nthnl",
    password: "Admin_1290",
    database:"mydb"
});
conn.connect(err=>{
    if(err) throw err;
    console.log('Database Connected');
    conn.query("SELECT * FROM customers WHERE address = 'Tokyo'", (err, result)=>{
        if(err) throw err;
        console.log(result);
    })
})

