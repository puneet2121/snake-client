const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function() {
  const conn = net.createConnection({
    host:IP,
    port: PORT  // PORT number here,
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect',() =>{
    console.log('Successfully connected to game server');
    conn.write('Name: PKB');
    conn.write('Move: down');
    
  });
  
    
  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });
  return conn;
  
};

module.exports = {
  new : connect(),
};



// setTimeout( ()=>{
//   conn.write('Move: down')
// },2000)
// setInterval( ()=>{
//   conn.write('Move: down')
// },2000)