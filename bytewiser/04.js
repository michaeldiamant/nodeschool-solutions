var fs = require('fs');

// Handwrote implementation for sake of completing exercise.  In a production
// environment, split library handles this concern.
var asciiNewline = 10;

fs.readFile(
  process.argv[2],
  function (err, data) {
    if (err) throw err;
   
    var startIndex = 0;
    var newlineIndexes = [];
    for (var i = 0; i < data.length; i++)
      if (data[i] === asciiNewline)
        newlineIndexes.push(i);

    // Add end of buffer as part of splitting process
    newlineIndexes.push(data.length - 1);

    newlineIndexes.forEach(function (newlineIndex, index) {
      var startIndex = index === 0 ? -1 : newlineIndexes[index - 1];
      console.log(data.slice(startIndex + 1, newlineIndex - 1));
    });
  });
