const express = require('express');
const app = express();

//以下是CORS的简单请求
//设置跨域访问
//这三个带有 Access-Control 开头的字段分别表示：
//
// Access-Control-Allow-Origin
// 必须。它的值是请求时Origin字段的值或者 *，表示接受任意域名的请求。
// Access-Control-Allow-Credentials；
// 可选。它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。设为true，即表示服务器明确许可，Cookie可以包含在请求中，一起发给服务器。
// 再需要发送cookie的时候还需要注意要在AJAX请求中打开withCredentials属性：var xhr = new XMLHttpRequest(); xhr.withCredentials = true;
// 需要注意的是，如果要发送Cookie，Access-Control-Allow-Origin就不能设为*，必须指定明确的、与请求网页一致的域名。同时，Cookie依然遵循同源政策，只有用服务器域名设置的Cookie才会上传，其他域名的Cookie并不会上传，且原网页代码中的document.cookie也无法读取服务器域名下的Cookie。
// Access-Control-Expose-Headers
// 可选。CORS请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个基本字段：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma。如果想拿到其他字段，就必须在Access-Control-Expose-Headers里面指定。上面的例子指定，getResponseHeader('Info')可以返回Info字段的值。
// app.all('*',function (req,res,next) {
//   res.header('Access-Control-Allow-Origin',"*");
//   res.header('Access-Control-Allow-Headers','X-Requested-With');
//   res.header('Access-Control-Methods','PUT,POST,GET,DELETE,OPTIONS');
//   res.header('X-Powered-By','3.2.1');
//   res.header("Content-Type","application/json;charset=utf-8");
//   next();
// })

app.get('/',function (req,res) {
    res.send('index');
})

//首先做一个 options 的请求返回CORS的头信息。
app.options('/getInfo',function (req,res) {
  res.setHeader('Access-Control-Allow-Origin',req.headers.origin);
  res.setHeader('Access-Control-Allow-Credentials',true);
  res.setHeader('Access-Control-Expose-Headers','Info');
  res.setHeader('Content-Type','application/json;charset=utf-8');
  console.log(req);
});
//请求的业务逻辑
app.get('/getInfo',function (req,res) {
  res.setHeader('Access-Control-Allow-Origin',req.headers.origin);
  res.setHeader('Access-Control-Allow-Credentials',true);
  res.end({
    Info:{
      name:'zhangsan',
      age:20
    }
  })
});

app.listen(3000);
