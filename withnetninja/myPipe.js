var fs = require('fs');

var streamReader = fs.createReadStream(__dirname + '/readMe.txt');
var streamWriter = fs.createWriteStream (__dirname + '/writeMe1.txt');

streamReader.pipe(streamWriter);