const http = require('http');
http.createServer((request, response) => {
    response.write("<h1>Hello</h1>");
    response.end();
}).listen(8080);

//========== or =============
// function call(request, response) {
//     response.write("Hello");
//     response.end();
// }
// http.createServer(call).listen(8080);

//========== or =============
// const call = (request, response) => {
//     response.write("Hello");
//     response.end();
// }
// http.createServer(call).listen(8080);