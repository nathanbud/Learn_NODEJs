var fs  =require('fs');
//var http

var streamReader = fs.createReadStream(__dirname + '/readMe.txt');
var streamWriter = fs.createWriteStream(__dirname + '/writeMe.txt');

streamReader.on('data', function(chunk){
    console.log(chunk);
    streamWriter.write(chunk);
})
 