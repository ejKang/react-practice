function work1(onDone) {
  setTimeout(() => onDone('작업 1 완료'), 100);
}

function work2(onDone) {
  setTimeout(() => onDone('작업 2 완료'), 200);
}

function work3(onDone) {
  setTimeout(() => onDone('작업 3 완료'), 300);
}

function urgenWork() {
  console.log('긴급 작업');
}

work1(function (msg1) {
  console.log('done after 100ms: ' + msg1);
  work2(function (msg2) {
    console.log('done after 200ms: ' + msg2);
    work3(function (msg3) {
      console.log('done after 300ms: ' + msg3);
    });
  });
});
urgenWork();

// ES6 async function
class Promise {
  constructor(fn) {
    const resolve = (...args) => {
      if (typeof this.onDone === 'function') {
        this.onDone(...args);
      }
      if (typeof this.onComplete === 'function') {
        this.onComplete(...args);
      }
    };
    const reject = (...args) => {
      if (typeof this.onError === 'function') {
        this.onError(...args);
      }
      if (typeof this.onComplete === 'function') {
        this.onComplete(...args);
      }
    };
    fn(resolve, reject);
  }

  then(onDone, onError) {
    this.onDone = onDone;
    this.onError = onError;
    return this;
  }

  catch(onError) {
    this.onError = onError;
    return this;
  }

  finally(onComplete) {
    this.onComplete = onComplete;
    return this;
  }
}

// -----

const work1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve('작업 1 완료');
    }, 100);
  });
};

const work2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve('작업 2 완료');
    }, 200);
  });
};

const work3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve('작업 3 완료');
    }, 300);
  });
};

const nextWorkOnDone = (msg1) => {
  console.log('done after 100ms:' + msg1);
  return work2();
};

work1()
  .then(nextWorkOnDone)
  .then((msg2) => {
    console.log('done after 200ms:' + msg2);
    return work3();
  })
  .then((msg3) => {
    console.log('done after 600ms:' + msg3);
  });
urgenWork();

// -----

const work1and2 = () =>
  work1().then((msg1) => {
    console.log('done after 100ms : ' + msg1);
    return work2();
  });

work1and2()
  .then((msg2) => {
    console.log('done after 200ms: ' + msg2);
    return work3();
  })
  .then((msg3) => {
    console.log('done after 600ms: ' + msg3);
  });
