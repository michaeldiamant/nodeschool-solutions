var concat = require('concat-stream');

var asciiPeriod = 46;
var asciiExclamation = 33;

process.stdin.pipe(
  concat(function (buffer) {
    var updated = new Buffer(buffer.length);
    for (var i = 0; i < buffer.length; i++)
      updated[i] = buffer[i] === asciiPeriod ? asciiExclamation : buffer[i];
    console.log(updated);
  }));




