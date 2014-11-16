var through = require('through');

var tr = through(
  function (buffer) {
    this.queue(buffer.toString().toUpperCase());
  });

process.stdin.pipe(tr).pipe(process.stdout);
