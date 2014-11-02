var http = require('http');

var content = "";

http.get(
  process.argv[2],
  function (result) {
    result.setEncoding('utf8');
    result.on('data', function (data) {
      content += data;
    });
    result.on('error', function (error) {
      console.error(error);
    });
    result.on('end', function () {
      console.log(content.length);
      console.log(content);       
    });
  })
