const fs = require('fs');
const file = __dirname+ '/assets/message.txt';
const content = fs.readFileSync(file, 'utf8');

console.log(content);

