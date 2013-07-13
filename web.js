var express = require('express');

var app = express.createServer(express.logger());

// var buf =  new Buffer(fs.readFileSync('index.html'));
// str =  buf.toString();

buf = new Buffer(256);
len = buf.write('\u00bd + \u00bc = \u00be', 0);
console.log(len + " bytes: " + buf.toString('utf8', 0, len));

app.get('/', function(request, response) {
  response.send('helloooooo wirth');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
