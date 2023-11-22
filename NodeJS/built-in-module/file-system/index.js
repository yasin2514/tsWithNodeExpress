// built - in - module

// file system
const fs = require("fs");

//read file synchronously
const readFileText = fs.readFileSync("./file/readFile.txt", "utf-8");
// console.log(readFileText);

//write file synchronously
const writeFileData = "My Name is Yasin Khan Rabbi.I'm from Bangladesh";
fs.writeFileSync("./file/writeFile.txt", writeFileData, "utf-8");

// asynchronously ----
//read file

fs.readFile("./file/readFile.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);

  const writeText = "My name is Yasin Khan Rabbi" + data;
  fs.writeFile("./file/writeFileTwo.txt", writeText, "utf-8", (err) => {
    if (err) throw err;
  });
});
