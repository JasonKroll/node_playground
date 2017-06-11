var path = require('path');
var express = require('express');

var DIST_DIR = path.join(__dirname, 'dist');
var PORT = 3000;
var app = express();

// serve the files using the dist folder
app.use(express.static(DIST_DIR));

// send index.html when the user access the web
console.log('dist_dir', DIST_DIR);
app.get('*', function (req, res) {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(PORT, function() {
  console.log('App is listening on port ' + PORT);
});
