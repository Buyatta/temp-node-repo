const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  if (req.url === "/") {
    res.end("Hello Mr");
  }
  if (req.url === "/about") {
    res.end("Hello there");
  }
});
server.listen(5000);
