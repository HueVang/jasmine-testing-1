var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('build'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,'build/index.html'));
});

app.listen(process.env.PORT || 3000);
