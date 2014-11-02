var filenameExtensions = require('./06-module.js');
filenameExtensions(
  process.argv[2],
  process.argv[3],
  function (err, filenames) {
    if (err) throw err;
    filenames.forEach(function (filename) {
      console.log(filename);
    });
  });
