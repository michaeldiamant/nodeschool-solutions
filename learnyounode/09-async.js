var http = require('http');
var async = require('async');
var concat = require('concat-stream');

var tasks = 
  process.argv.slice(2).map(
    function (url) {
      return function(callback) {
        http.get(
          url,
          function (result) {
            result.setEncoding('utf8');
            result.pipe(
              concat(function (data) {
                callback(null, data);
              }));
          });
      };
    });

async.parallel(
  tasks,
  function (error, results) {
    if (error) throw error;
    results.forEach(function (r) {
      console.log(r);
    });
  });

