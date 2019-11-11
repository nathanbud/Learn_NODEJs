var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var streamReader = fs.createReadStream(__dirname + '/html/index.html', 'utf8');
    streamReader.pipe(res);
})

server.listen(3000, '127.0.0.1');
