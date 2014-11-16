var duplexer = require('duplexer');
var through = require('through');

module.exports = function (counter) {
  var countryToCount = {};
  var tr = through(
    function (countryTuple) {
      countryToCount[countryTuple.country] = 
        countryToCount[countryTuple.country] ? countryToCount[countryTuple.country] + 1 : 1;
      this.queue(countryToCount);
    }, 
    function () {
      counter.setCounts(countryToCount);
    });
  
  return duplexer(tr, counter);
};
