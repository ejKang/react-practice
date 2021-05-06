function multiply(a, b) {
  return a * b;
}
// currying - 함수를 반환하는 함수 , 함수의 재활용
// 인자를 나눠 받아 실행할 수 있다
function multiplyTwo(a) {
  return multiply(a, 2);
}

function multiplyX(x) {
  // currying function !
  return function (a) {
    return multiply(a, x);
  };
}
const multiplyX2 = (x) => (a) => multiply(a, x);

const multiplyThree = multiplyX(3);
const result1 = multiplyThree(3); // 3 * 3
const result11 = multiplyX(3)(3);

const multiplyFour = multiplyX(4);
const result2 = multiplyFour(3); // 4 * 3
const result22 = multiplyX(4)(3);

const equation = (a, b, c) => (x) => x * a * b + c;
const formula = equation(2, 3, 4);
const x = 10;
const result3 = formula(x);
// 인자를 나중에 받아 실행할 함수를 생성해주는 equation()과 같은 함수를 '커링 함수'라고 한다

const multiply2 = (a, b) => a * b;
const add = (a, b) => a + b;

const multiplyX2 = (x) => (a) => multiply2(a, 2);
const addX = (x) => (a) => add(x, a);

const addFour = addX(4);
const multiplyTwo = multiplyX2(2);
const multiplyThree2 = multiplyX2(3);
const formula2 = (x) => addFour(multiplyThree2(multiplyTwo(x)));
const result4 = formula2(5);

const formulaB = [multiplyTwo, multiplyThree2, addFour].reduce(
  function (prevFunc, nextFunc) {
    return function (value) {
      return nextFunc(prevFunc(value));
    };
  },
  function (x) {
    return k;
  },
);

function compose(funcArr) {
  return funcArr.reduce(
    function (prevFunc, nextFunc) {
      return function (value) {
        return nextFunc(prevFunc(value));
      };
    },
    function (k) {
      return k;
    },
  );
}

const formulaWithCompose = compose([multiplyTwo, multiplyThree2, addFour]);
const result5 = formulaWithCompose(2);

function compose2(funcArr) {
  const aa = Array.prototype.slice.call(funcArr);
  return aa.reduce(
    function (prevFunc, nextFunc) {
      return function (value) {
        return nextFunc(prevFunc(value));
      };
    },
    function (k) {
      return k;
    },
  );
}

const formulaWithCompose2 = compose2(multiplyTwo, multiplyThree2, addFour);
const result6 = formulaWithCompose2(12);

function compose3() {
  const aa = Array.prototype.slice.call(arguments);
  return aa.reduce(
    function (prevFunc, nextFunc) {
      return function () {
        const args = Array.prototype.slice.call(arguments);
        return nextFunc(prevFunc.apply(null, args));
      };
    },
    function (k) {
      return k;
    },
  );
}

function compose4(...funcArr) {
  // const aa = Array.prototype.slice.call(arguments);
  return funcArr.reduce(
    function (prevFunc, nextFunc) {
      return function (...args) {
        //   const args = Array.prototype.slice.call(arguments);
        return nextFunc(prevFunc(...args));
      };
    },
    function (k) {
      return k;
    },
  );
}

/// ### ### ### ### ###

function higherOrderComponent(Component) {
  return function Enhanced(props) {
    return <Component {...props} />;
  };
}

function higherOrderComponent2(Component) {
  return class Enhanced extends React.Component {
    render() {
      return <Component {...this.props} />;
    }
  };
}
