const http = require("http");
const fs = require("fs");

var port = 6969;

http
  .createServer((req, res) => {
    res.writeHead(200, "content-type", "text/html");
    var readStream = fs.createReadStream("home.html");
    readStream.pipe(res);
  })
  .listen(port);

console.log("server is running");
