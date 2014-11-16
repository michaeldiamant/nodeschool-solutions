var split = require('split');
var through = require('through');

var lineCount = 0;

function fold(line, odd, even) {
  lineCount++;
  var result = "";
  if (lineCount % 2 == 0)
    result = even(line);
  else 
    result = odd(line);

  return result + '\n';
}

function odd (line) {
  return line.toLowerCase();
}

function even (line) {
  return line.toUpperCase();
}

var tr = through(
  function (buffer) {
    this.queue(fold(buffer.toString(), odd, even));
  });

process.stdin
  .pipe(split())
  .pipe(tr)
  .pipe(process.stdout);
