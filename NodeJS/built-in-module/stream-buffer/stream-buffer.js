// built in module
//create server and streaming
//http module

const http = require("http");
const fs = require("fs");

//create local server
const server = http.createServer();

//listening
server.on("request", (req, res) => {
  if (req.url === "/read-stream" && req.method === "GET");
  //read stream
  const readableStream = fs.createReadStream(
    process.cwd() + "/file/textStream.txt"
  );

  //listening
  readableStream.on("data", (buffer) => {
    res.statusCode = 200;
    res.write(buffer);
  });

  //   listening
  readableStream.on("end", () => {
    res.statusCode = 200;
    res.end("The stream is End!!!!!!!!!!!!!!!!!");
  });

  //listening
  readableStream.on("error", () => {
    res.statusCode = 5000;
    res.end("Something went to wrong");
  });
});

// server listening
server.listen(5000, (err) => {
  if (err) throw err;
  console.log("server is running 5000 port");
});
