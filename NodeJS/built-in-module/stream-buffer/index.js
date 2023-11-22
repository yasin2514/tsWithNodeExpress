// built in module

//http module
const http = require("http");

//create server
const server = http.createServer();

//listen server
server.on("request", (req, res) => {
  res.end("hello my name is server");
});

//server listening port
server.listen(5000, (err) => {
  if (err) throw err;
  console.log("server running on port 5000");
});
