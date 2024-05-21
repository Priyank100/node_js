const http = require('http');
const response = require('./response');

http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type':'application/json'});
    res.write(JSON.stringify(response));
    res.end();
    
}).listen(8800);