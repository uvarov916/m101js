var http = require('http');

var server = http.createServer( function(req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello, World!\n");
}).listen(3000);

console.log("Listening on port 3000...");