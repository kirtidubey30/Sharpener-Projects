const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log("req.url =" + req.url + "req.method ===" + req.method);
  res.setHeader("Content-Type", "text/html");

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
  if (req.url === "/") {
    fs.readFile("message.txt", (error, data) => {
      if (error) {
        console.log("Error reading file:", error);
      } else {
        const message = data.toString();
        res.write(`<p>${message}</p>`);
      }
      res.write("Trying to read and write from/to a file <br>");
      res.write("<html>");
      res.write("<head><title>Write The Message</title></head>");
      res.write(
        '<body><form action="message" method="POST"><input type="text" name="message" /><button type="submit">Submit</button></form></body>'
      );
      res.write("</html>");
      return res.end();
    });
  }

  if (req.url === "/message" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log("chunk =", chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log("parsedBody =", parsedBody);
      fs.writeFile("message.txt", message, (err) => {
        if (err) {
          console.log("Error writing file:", err);
          res.statusCode = 500; // Internal Server Error
          return res.end();
        }
        console.log("File Written Successfully");
        res.statusCode = 302; // Found
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
});
server.listen(3000);
