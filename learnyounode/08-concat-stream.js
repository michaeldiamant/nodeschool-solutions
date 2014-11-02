var http = require('http');
var concat = require('concat-stream');

var write = concat(function (data) {
  console.log(data.length);
  console.log(data);
});

http.get(
  process.argv[2],
  function (result) {
    result.setEncoding('utf8');
    result.pipe(write);
  });
