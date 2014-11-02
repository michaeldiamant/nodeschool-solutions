var http = require('http');
var bl = require('bl');
    
http.get(
  process.argv[2],
  function (response) {
    response.pipe(
      bl(
        function (error, data) {
          if (error) throw error;
          var s = data.toString();
          console.log(s.length);
          console.log(s);
      }))
  });
