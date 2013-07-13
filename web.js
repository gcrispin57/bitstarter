var express = require('express');

var app = express.createServer(express.logger());

var buf = new Buffer(256);
var fs = require('fs');
var text = fs.readFileSync('index.html','utf8');
var len = buf.write(text, "utf-8");
var str = buf.toString("utf-8",0, len);
console.log(len + " bytes: " + str);

//var buffer = buffer.toString(("Hello Crispin", "utf8"));
//console.log(buffer);

app.get('/', function(request, response) {
  response.send(fs.readFileSync('index.html', 'utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
