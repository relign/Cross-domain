var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port:8090});
wss.on('connection',function (ws) {
  ws.on('message',function (message) {
    var obj = JSON.parse(message);
    console.log('received: %s',message);
  });
  ws.send('hello world');
});

console.log('running!!');
