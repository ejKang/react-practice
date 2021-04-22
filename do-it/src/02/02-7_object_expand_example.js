var x = 0;
var y = 0;

var obj = { x: x, y: y };
var randomKeyStr = 'other';
var combined = {};

combined['one' + randomKeyStr] = 'some value';

var obj2 = {
  x: x,
  methodA: function () {
    console.log('method A');
  },
  methodB: function () {
    return 0;
  },
};

var obj_2 = { x, y };
var combined_2 = {
  ['one' + randomKeyStr]: 'some value',
  ['two' + randomKeyStr]: 'some value2',
};

var obj2_2 = {
  x,
  methodA() {
    console.log('method A');
  },
  methodB() {
    return 0;
  },
};

// separate example

var list = [0, 1];
var item1 = list[0];
var item2 = list[1];
var item3 = list[2] || -1;

var temp = item2;
item2 = item1;
item1 = temp;

var obj = {
  key1: 'one',
  key2: 'two',
};
var key1 = obj.key1;
var key2 = obj.key2;
var key3 = obj.key3 || 'default key3 value';

var newKey1 = obj.key1;

// ES6

var [item1, item2, item3 = -1] = list;
[item1, item2] = [item2, item1];
var { key1: newKey1, key2, key3 = 'default key3 value' } = obj;

var [item1, ...otherItems] = [0, 1, 2];
var { key1, ...others } = { key1: 'one', key2: 'two' };
