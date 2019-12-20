const http = require('http'),
      fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type":"video/mp4"});

    fs.exists('./assets/swan.mp4', (data) => {
        if(data){
            let video = fs.createReadStream('./assets/swan.mp4');
            video.pipe(res)

        }else{
            res.end("Error");
        }

    });

});

server.listen(3000);