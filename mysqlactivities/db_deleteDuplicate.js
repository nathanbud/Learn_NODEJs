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

    conn.query("WITH CTE([name],[address], duplicateCount) AS (SELECT [name][address], ROW_NUMBER() OVER(PARTITION BY [name][address] ORDER BY id) AS DuplicateCount FROM [customers]) SELECT * FROM CTE)", (err, result)=>{
        if (err) throw err;
        console.log(`Number of records deleted:${result.affectedRows}`);
        
    });

    
})