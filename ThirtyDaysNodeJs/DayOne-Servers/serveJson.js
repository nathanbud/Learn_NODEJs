const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/JSON"});
    //create a JSON
    let person = {
        firstname: "John",
        lastname: "Q",
        status: 200,
        birth:'12-12-90',
        hobbies: ['dancing', 'signing', 'coding', 'swimming']

    }
    res.end(JSON.stringify(person));
});

server.listen(3000);