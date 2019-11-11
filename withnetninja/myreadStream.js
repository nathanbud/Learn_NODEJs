//var http = require('http');
var fs = require('fs');

var streamReader = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

streamReader.on('data', function(chunk){
console.log(chunk);
})

