var http = require('http');
var through = require('through');

http.createServer(function (request, response) {
  request.pipe(
    through(function (buffer) {
      this.queue(buffer.toString().toUpperCase());
    }))
    .pipe(response);
})
  .listen(process.argv[2]);
