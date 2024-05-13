const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.setHeader("Content-Type", "text/plain");
  // When url = /home , return response ==> Welcome home
  // When url = /about, return response ==> Welcome to About Us page
  // When url =/node, return response ==> Welcome to my Node Js project

  if (req.url === "/home") {
    res.write("Welcome Home");
    return res.end();
  }
  if (req.url === "/about") {
    res.write("Welcome to About Us Page");
    return res.end();
  }
  if (req.url === "/node") {
    res.write("Welcome to my Node Js project");
    return res.end();
  }
  res.write("Kirti Dubey");
  res.end();
  // process.exit();
});
server.listen(3000);
