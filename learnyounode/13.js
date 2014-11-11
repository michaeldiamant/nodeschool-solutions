var http = require('http');
var url = require('url');

function hms(timestamp) {
  return {
    'hour' : timestamp.getHours(),
    'minute' : timestamp.getMinutes(),
    'second' : timestamp.getSeconds(),
  };
}

function epoch(timestamp) {
  return { 'unixtime' : timestamp.getTime() };
}

function completeResponse(parsedUrl, response, formatTimestamp) {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(
    JSON.stringify(
      formatTimestamp(
        new Date(parsedUrl.query.iso))));
}

function schonfinkelize(fn) {
  var slice = Array.prototype.slice,
    stored_args = slice.call(arguments, 1);
  return function () {
    var new_args = slice.call(arguments),
      args = stored_args.concat(new_args);
        return fn.apply(null, args);
  };
}

http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true);
  var complete = schonfinkelize(completeResponse, parsedUrl, response);
  switch (parsedUrl.pathname) {
    case '/api/parsetime':
      complete(hms);
      break;
    case '/api/unixtime':
      complete(epoch);
      break;
    default:
      response.writeHead(400, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify({ 'error' : 'Unsupported route ' + parsedUrl.pathname }));
  }  
})
  .listen(process.argv[2]);
