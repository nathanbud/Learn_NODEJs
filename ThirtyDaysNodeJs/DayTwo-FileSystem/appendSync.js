const fs = require('fs');

const content = "Appended from Sync";

fs.appendFileSync('./assets/append.txt', content);

console.log('Appended from Sync');