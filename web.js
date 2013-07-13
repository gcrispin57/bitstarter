var express = require('express');

var app = express.createServer(express.logger());


var data;
data = (fs.readFileSync('index.html', encoding String);
console.log(data)
// console.log(fs.readFileSync('index.html', encoding String));
// console.log(len + " bytes: " + buf1.toString('utf8', 0, len));

// var buf =  new Buffer(fs.readFileSync('index.html'));
// str =  buf.toString();

buf = new Buffer(256);
len = buf.write('\u00bd + \u00bc = \u00be', 0);
console.log(len + " bytes: " + buf.toString('utf8', 0, len));

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
