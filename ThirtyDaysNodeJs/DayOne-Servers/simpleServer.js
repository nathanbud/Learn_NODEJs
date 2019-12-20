const http = require('http');

const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res)=>{
    res.writeHead(200,{"Content-type": "text/plain"});
    res.end("Hello World Node");
    
});

server.listen(port, host, (error)=>{
    if(error){
        console.log("Something is wrong", error);
    }else{
        console.log("Your are litening on port:", port);
        
    }
})