const http = require('http'),
      fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type":"text/pdf"});
    fs.readFile('index.pdf', (error, data) => {
        if (error)
        throw error;

        res.end(data);
    })

});

server.listen(3000);