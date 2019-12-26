const fs = require('fs');
const filename = "./assets/index.html";
 let str = fs.readFileSync(filename).toString();
 let pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;

 let myarray = str.match( pattern );
 let len = myarray.length;
 console.log(`Occurences of pattern in the string is :${len}`);