var express = require("express");
var app = express();
app.use(express.logger());

app.use(express.static(__dirname));

app.get('/', function(request, response) {
  var fs = require('fs');
  var ind = fs.readFileSync('index.html');
  var buf = new Buffer(ind);
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
