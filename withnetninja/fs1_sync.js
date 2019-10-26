var fs = require('fs');

//SYNCHRONOUS
// read file
var text = fs.readFileSync('./Texts/readMe.txt', 'utf8');
console.log(text);

//write file
var write= "Let this be written to the write text";

fs.writeFileSync('./Texts/write.txt', write);

