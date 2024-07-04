const http = require("http");

const server = http.createServer((req, res) => {
  res.write("This is response from this Server");
  res.end();
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
