var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request was made:' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain' });
    var streamReader = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    streamReader.pipe(res);
})

server.listen(3000, '127.0.0.1');
