const http = require('http'),
      fs  = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile('index.html',(error, data) =>{

        if(error)
            throw error;

            console.log("Operation Success"); 
        res.end(data);
        
    });
    
});

server.listen(3001);
