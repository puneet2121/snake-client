

const obj = require("./client")
// establishes a connection with the game server
      
  let conn = obj.new
  const handleUserInput = function (key) {
      if(key === 'w'){
        obj.new.write('Move: left')
      }
      else if(key === 'n'){
        obj.new.write('Move: down')

      }
      else if(key === 'p'){
        obj.new.write('Move: right')

      }
      else if(key === 'q'){
        obj.new.write('Move: up')

      }
      else if(key === 't'){
        obj.new.write('Say: hello')
      }
      else if (key === '\u0003') {
        process.exit();
      }
  }   
  const setupInput = function (conn) {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.on("data", handleUserInput);
    stdin.resume();
    return stdin;
  };
  
setupInput(conn)


console.log("Connecting ...");
module.exports = setupInput;