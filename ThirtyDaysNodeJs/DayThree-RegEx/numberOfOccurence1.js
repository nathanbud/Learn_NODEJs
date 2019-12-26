const fs = require('fs');
const filename = './assets/data.txt';
const str = fs.readFileSync(filename).toString();

// g: -global scope
// i: -case insensitive
// m: multiline match

let pattern = /man/gim;
let myarray = str.match( pattern);
let len = myarray.length;
console.log(`Occurences of pattern in the string is :${len}`);
