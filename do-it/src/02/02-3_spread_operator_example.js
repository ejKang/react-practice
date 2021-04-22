var array1 = ['one', 'two'];
var array2 = ['three', 'four'];

var combined = [array1[0], array1[1], array2[0], array2[1]];
var combined_2 = array1.concat(array2);
var combined_3 = [].concat(array1, array2);

var first = array1[0];
var second = array1[1];
var three = array1[2] || 'empty'; // 해당 요소가 없을 때 기본값을 지정

function func() {
  var args = Array.prototype.slice.call(this.arguments);
  var first = args[0];
  var others = args.slice(1, args.length);
}

// ES6의 전개 연산자
const combined_4 = [...array1, ...array2];
const [first, second, three = 'empty', ...others] = array1;

function funcs_2(...args) {
  var [first, ...others] = args;
}
// var xwrongArr = [...array1];
// var wrongArr = ...array1;
