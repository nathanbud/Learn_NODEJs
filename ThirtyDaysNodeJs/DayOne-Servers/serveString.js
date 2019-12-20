const http = require('http');

const host ='127.0.0.1';
const port = 3000;

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello World 1");
    res.write("Hello World 2");
    res.write("Hello World 3");
    res.end();
});

server.listen(port, host, (error) =>{
    if(error){
        console.log(`Error ${error}`);
        
    }else{
        console.log(`You are running on port ${port}`);
        
    };
});