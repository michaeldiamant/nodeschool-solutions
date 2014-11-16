var trumpet = require('trumpet');
var through = require('through');

var tr = trumpet();
var loudSelector = tr.select('.loud');
var loudRead = loudSelector.createReadStream();
var loudWrite = loudSelector.createWriteStream();

loudRead
  .pipe(
    through(function (buffer) {
       this.queue(buffer.toString().toUpperCase());
    }))
  .pipe(loudWrite);

process.stdin.pipe(tr).pipe(process.stdout);
