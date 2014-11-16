var combine = require('stream-combiner');
var split = require('split');
var through = require('through');
var zlib = require('zlib');

module.exports = function () {
  var record;

  return combine(
    split(),
    through(
      function (lineBuffer) {
        if (lineBuffer.length == 0)
          return;

        var line = JSON.parse(lineBuffer);
        if (line.type === 'genre') { 
          if (record)
            this.queue(JSON.stringify(record) + '\n');
          record = { name: line.name, books: [] };
        } else 
          record.books.push(line.name);
      },
      function () {
        if (record)
          this.queue(JSON.stringify(record) + '\n');
        this.queue(null);
      }),
    zlib.createGzip());
};
