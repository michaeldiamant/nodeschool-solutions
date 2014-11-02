module.exports = function (directoryName, filenameExtension, callback) {
  var fs = require('fs');
  var path = require('path');

  fs.readdir(
    directoryName, 
    function (err, filenames) {
      if (err) return callback(err);
      callback(
        null,
        filenames.filter(function (filename) {
          return path.extname(filename) === "." + filenameExtension
        }));
    });
};
