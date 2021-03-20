const path = require("path");

const myPath = (path.join(__dirname, "path"));

const pathObject = path.parse(myPath);

console.log(pathObject);