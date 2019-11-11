const http = require('http');
const fs =  require('fs');

const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'application/json'});
    var myObj = {
        name: 'Nathan',
        job: 'ninja',
        age : 30 
    }

    res.end(JSON.stringify(myObj));
})

server.listen(3000, '127.0.0.1');