const http = require('http');
const url = require('url');
const querystring = require('querystring');


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  let urlPath = url.parse(req.url).pathname;
  let qs = querystring.parse(req.url.split('?')[1]);
  res.statusCode = 200;
  if(urlPath === '/jsonp' && qs.callback){
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    var data = {
      "name":"Cat"
    };
    data = JSON.stringify(data);
    var callback = qs.callback + '(' + data + ')' ;
    res.end(callback);
  }else{
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.end('Hello World\n');
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
