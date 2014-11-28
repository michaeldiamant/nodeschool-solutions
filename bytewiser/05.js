var acc = null;

process.stdin.on('data', function (chunk) {
  if (acc === null) {
    acc = new Buffer(chunk.length);    
    chunk.copy(acc);
  } else {
    var updatedAcc = new Buffer(acc.length + chunk.length);
    acc.copy(updatedAcc);
    chunk.copy(updatedAcc, acc.length);
    acc = updatedAcc;
  }
});

process.stdin.on('end', function () {
  console.log(acc);
});
