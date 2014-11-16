var proc = require('child_process');
var duplexer = require('duplexer')

module.exports = function (cmd, args) {
  var child = proc.spawn(cmd, args);
  return duplexer(child.stdin, child.stdout);
};
