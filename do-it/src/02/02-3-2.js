var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combined = {
  one: objectOne.one,
  two: objectOne.two,
  three: objectTwo.three,
  four: objectTwo.four,
};

var combined_2 = Object.assign({}, objectOne, objectTwo);
var combined_3 = Object.assign({}, objectTwo, objectOne);
var others = Object.assign({}, combined);
delete others.other;

// ES6 전개 연산자 사용

var combined_4 = {
  ...objectOne,
  ...objectTwo,
};

var combined_5 = {
  ...objectTwo,
  ...objectOne,
};

var { other, ...others } = combined_5;
