const fs = require('fs');

let content = "This is to be written";
fs.writeFile(__dirname+'/assets/write.txt', content, (err) =>{
    if(err)
    throw err;
    console.log("Content saved");
    
} );
