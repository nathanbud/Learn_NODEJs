const fs = require('fs');

let content = "Written form Sync";
fs.writeFileSync('./assets/write.txt', content);

console.log("Content written");
