process.stdin.on('data', function (chunk) {
  console.log(JSON.stringify(new Uint8Array(chunk)));
});
