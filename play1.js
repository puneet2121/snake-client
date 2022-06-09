const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();

setupInput();
  


console.log("Connecting ...");
module.exports = setupInput;