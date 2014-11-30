// -> Define an object called 'Robot'
// -> Define a method called 'new' in Robot
// -> When Robot.new is called is should return a new object with Robot as its prototype 
//    e.g. var robby = Robot.new();
//    Robot should be the prototype of robby

var Robot = {
  new: function () {
    var o = {};
    o.__proto__ = this;
    return o;
  }
};


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot: Robot
}
