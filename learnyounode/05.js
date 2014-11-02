var fs = require('fs');
var path = require('path');

fs.readdir(
  process.argv[2], 
  function (err, filenames) {
    if (err) throw err;
    for (var i = 0; i < filenames.length; i++)
      if (path.extname(filenames[i]) === "." + process.argv[3])
        console.log(filenames[i]);
  });
