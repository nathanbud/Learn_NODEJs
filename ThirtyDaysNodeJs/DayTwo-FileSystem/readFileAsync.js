const fs = require('fs');

const app = fs;


app.readFile(__dirname +'/assets/message.txt','utf8', (error, data) => {
    if(error)
    throw error;

    console.log(`Content: ${data}`);
})

