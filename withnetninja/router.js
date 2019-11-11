const fs = require('fs');
const http = require('http');

const server = http.createServer(function(req, res){

    if (req.url === '/' || req.url === '/index.html'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        const streamReader = fs.createReadStream(__dirname + '/html/index.html');
        streamReader.pipe(res);
    }
else if (req.url === '/contact'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    const streamReader = fs.createReadStream(__dirname + '/html/contact.html');
    streamReader.pipe(res);
}

else if (req.url === '/api/ninjas'){
    res.writeHead(200, {'Content-Type': 'application/json'});
    let ninjas = [{
        name: 'Nathan',
        belt: 'Black',
        age: 30
    },
    {
        name: 'Nord',
        belt: 'Red',
        age: 26
    },
    {
        name: 'Min',
        belt: 'Black',
        age: 30
    }]

   // const streamReader = fs.createReadStream(__dirname + '/html/contact.html');
   // streamReader.pipe(res);
    res.end(JSON.stringify(ninjas));
}

else{
    res.writeHead(404, {'Content-Type': 'text/html'});
    const streamReader = fs.createReadStream(__dirname + '/html/404.html');
    streamReader.pipe(res);
}
})

server.listen(3000, '127.0.0.1');