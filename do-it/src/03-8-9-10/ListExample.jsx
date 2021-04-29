import React, { PureComponent } from 'react';
import MyComponent from '../03-6/MyComponent';
class ListExample extends PureComponent {
  test() {
    const numList = [1, 2, 3, 4];
    const mixedList = [1, 'str', {}, function a() {}];

    const componetList = [<MyComponent />, <MyComponent />, <b>HI</b>];

    // const todoList = [
    //   { taskName: 'Laundry', finished: false },
    //   { taskName: 'Study', finished: true },
    // ];
    // const todos = todoList.map((todo) => <div>{todo.taskName}</div>);
  }
  render() {
    const todoList = [
      { taskName: 'Laundry', finished: false },
      { taskName: 'Study', finished: true },
    ];
    const todos = todoList.map((todo) => <div>{todo.taskName}</div>);
    const priceList = [1000, 2000, 3000, 4000];
    const prices = priceList.map((price) => <div>Price: {price} $$</div>);
    return (
      <div>
        <label>ToDo List</label>
        {todos}
        {todoList.map((todo, i) => (
          <div key={`tl_${i}`}>{todo.taskName}</div>
        ))}
        <label>Price List</label>
        {prices}
      </div>
    );
  }
}

export default ListExample;
