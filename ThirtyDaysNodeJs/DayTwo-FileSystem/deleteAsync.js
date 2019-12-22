const fs = require('fs');

fs.unlink('./assets/deleteME.txt', (err) => {
    if(err)
    throw err;
    console.log("File Deleted");
})
