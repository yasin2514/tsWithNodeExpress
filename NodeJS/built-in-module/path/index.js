// built -in -- module ------

//path
const path = require("path");
const pathName =
  "C:/level-2WebDeveloment/Mission-2/Module-7/practice/NodeJS/built-in-module/path";

const dirName = path.dirname(`${pathName}/index.js`);
const parsePath = path.parse(`${pathName}/index.js`);
const pathJoin = path.join(`${pathName}`,"/index.js")

console.log({ dirName, parsePath, pathJoin });
