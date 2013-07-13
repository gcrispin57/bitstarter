var express = require('express');

var app = express.createServer(express.logger());

var buf =  new Buffer(fs.readFileSync('index.html'));
str =  buf.toString();

app.get('/', function(request, response) {
  response.send('helloooooo wirth');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
