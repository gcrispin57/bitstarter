var express = require('express');

var app = express.createServer(express.logger());

//var text = fs.readFileSync('index.html','utf8');
//console.log(text);

// var data;
//data = (fs.readFileSync('index.html', encoding String);
//console.log(data)
// console.log(fs.readFileSync('index.html', encoding String));
// console.log(len + " bytes: " + buf1.toString('utf8', 0, len));

// var buf =  new Buffer(fs.readFileSync('index.html'));
// str =  buf.toString();

var buf = new Buffer(256);
var len = buf.write("Hello", "utf-8");
var str = buf.toString("utf-8",0, len);
console.log(len + " bytes: " + str);

//var buffer = buffer.toString(("Hello Crispin", "utf8"));
//console.log(buffer);

app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
