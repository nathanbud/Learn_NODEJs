const http = require('http'),
      fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type":"audio/wav"});
    fs.exists('./assets/drum.wav', (data) => {
        if(data){
            var rstream = fs.createReadStream('./assets/drum.wav');
			rstream.pipe(res);
        }else{

            res.end("Its a 404");
        }
       
    });
});      

server.listen(3000);