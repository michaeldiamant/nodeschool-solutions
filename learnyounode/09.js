var http = require('http');

var responses = [];
var statuses = [];

function logWhenAllComplete() {
  var isDone = 
    statuses.every(function (e) {
      return e;
    });

  if (isDone)
    responses.forEach(function (e) {
      console.log(e);
    });
};

function sendRequest(url, index) {
  http.get(
    url,
    function (result) {
      result.setEncoding('utf8');
      result.on('data', function (data) {
        responses[index] += data;
      });
      result.on('error', function (error) {
        console.error(error);
      });
      result.on('end', function () {
        statuses[index] = true;
        logWhenAllComplete();
      });
    });
};

process.argv.slice(2).forEach(
  function (url, index) {
    statuses.push(false);
    responses.push("");
    sendRequest(url, index);
  });


