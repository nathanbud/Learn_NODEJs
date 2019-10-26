var fs = require('fs');

//read file asynchronous
// fs.readFile('./Texts/readMe.txt', 'utf8', function(error, data){
//     console.log(data);
// })

//write file asynchronous
fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('message.txt', 'Hello Node.js', 'utf8', callback);
  console.log(data);
})

