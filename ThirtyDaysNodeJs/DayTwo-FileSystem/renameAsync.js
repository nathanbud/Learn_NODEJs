const fs = require('fs');

fs.rename('./assets/message.txt', './assets/renamed_message.txt', (error) => {
    if(error)
    throw error;
    console.log("File renamed");
})

