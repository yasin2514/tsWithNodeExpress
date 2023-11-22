// import file
// common js module
const { add, myName } = require("./local-1-function");

const { add: addTwo, myName: myNameTwo } = require("./local-2-function");

console.log(`add one: ${add(10, 243)}`);
console.log(`add two: ${addTwo(10, 243, 32)}`);
console.log({myName,myNameTwo});

