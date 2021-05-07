import React from 'react';
import withState from 'recompose/withState';

export const withCountState = withState('count', 'setCount', 0);

function Counter({ count, setCount }) {
  const increaseCount = () => setCount((value) => value + 1);

  return (
    <div>
      Count : {count}
      <button onClick={increaseCount}>카운트 증가</button>
    </div>
  );
}
export const CounterWithCountState = withCountState(Counter);
