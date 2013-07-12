
var express = require('express');

var app = express.createServer(express.logger());

var buf =  new Buffer(ReadFileSync('index.html'));
buf =  buf_to_string();
console.log(buf);
app.get('/', function(request, response) {
  response.send(buf);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
