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

//buf = new Buffer(256);
//len = buf.write('\u00bd + \u00bc = \u00be', 0);
//console.log(len + " bytes: " + buf.toString('utf8', 0, len));

//var buffer = buffer.toString(("Hello Crispin", "utf8"));
//console.log(buffer);

app.get('/', function(request, response) {
  response.set('Content-Type', 'text/html');
  response.send(new Buffer('help me'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
