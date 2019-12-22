const fs = require('fs');

fs.unlinkSync('./assets/delete.txt');

console.log("File Deleted via Sync");