var http = require('http');
var ip = require("ip");

var hostname = "localhost";
var port = 3000;

http.createServer((req, res) => {
    res.statusCode = 200;
    res.end(ip.address())
}).listen(port, "0.0.0.0", () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
