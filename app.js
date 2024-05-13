const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  res.setHeader("Content-Type", "text/plain");
  res.write("Kirti Dubey");
  res.end();
});
server.listen(3000);
