const fs = require('fs');

let appended = "I'am Append";

fs.appendFile('./assets/append.txt', appended, (err)=>{
    if(err)
    throw err;

    console.log("File appended");
})