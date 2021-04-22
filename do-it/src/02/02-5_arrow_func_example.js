function add(first, second) {
  return first + second;
}

var add = function (first, second) {
  return first + second;
};

var add = (first, second) => {
  return first + second;
};

var add = (f, s) => f + s;
var addAndMultible = (f, s) => ({
  // return object
  add: f + s,
  multiple: f * s,
});
addAndMultible.add(1, 2);
addAndMultible.multiple(1, 2);

function addNumber(num) {
  return function (value) {
    return num + value;
  };
}
var addNumber = (num) => (value) => num + value;
// addNumber(4)(5);

class MyClass {
  value = 10;
  constructor() {
    var addThis2 = function (f, s) {
      return this.value + f + s;
    }.bind(this); // this case shoud bind this

    var addThis3 = (f, s) => {
      return this.value + f + s;
    };
  }
}
