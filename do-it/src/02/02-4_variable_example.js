// ES6의 가변 변수
let num = 1;
num = num * 3;
let str = '문자';
str = '다른문자';
let arr = [];
arr = [1, 2, 3];
let object = {};
object = { name: '새 객체' };

//ES6의 불변 변수
const num = 1;
// num = 3;

const str = '문자';
// str = '새문자';

const arr = [];
// arr = [1, 2, 3];

const obj = {};
// obj = { name: '내 이름' };

// 무결성 제약 조건을 위배하는 경우
const arr2 = [];
arr2.push(1);
arr2.splice(0, 0, 0);
arr2.pop();

const object2 = {};
object2['name'] = '내 이름';
Object.assign(object2, { name: '새 이름' });
delete object2.name;

// 무결성 제약 조건을 지키는 경우 ( 새로운 변수 생성 )
const num1 = 1;
const num2 = num1 * 3;
const str1 = '문자';
const str2 = str1 + '추가';
const arr3 = [];
const arr4 = arr3.concat(1);
const arr5 = [...arr4, 2, 3];
const arr6 = arr5.slice(0, 1);
const [first, ...arr7] = arr5;

const obj3 = { name: '내 이름', age: 20 };
const objValue = { name: '새 이름', age: obj3.age };
const obj4 = { ...obj3, name: '새 이름' };
const { name, ...obj5 } = obj4;
