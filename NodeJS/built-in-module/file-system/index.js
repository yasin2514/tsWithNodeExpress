// built - in - module

// file system
const fs = require("fs");

//read file synchronously
const readFileText = fs.readFileSync("./file/readFile.txt", "utf-8");
console.log(readFileText);

//write file synchronously
const writeFileData = "My Name is Yasin Khan Rabbi.I'm from Bangladesh";
fs.writeFileSync("./file/writeFile.txt", writeFileData, "utf-8");
