var path = require('path');

var DIST_DIR = path.join(__dirname, "dist");
var CLIENT_DIR = path.join(__dirname, "src");

// context is an absolute string to the dir that contains the entry

module.exports = {
  context: CLIENT_DIR,

  entry: "./main",

  output: {
    path: DIST_DIR,
    filename: "bundle.js"
  },

  resolve: {
    extensions: ['.js']
  }

};