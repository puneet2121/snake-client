const obj = require("./client")
let conn = obj.new
const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};
module.exports = {
  setupInput : setupInput(conn)
}