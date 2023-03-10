const http = require("http");

// let HOST = "localhost";
let HOST = "192.168.43.246";
let PORT = "8080";

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hello from Server!");
};

const server = http.createServer(requestListener);
server.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
