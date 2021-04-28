import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }
  //   increaseCount() {
  //     const { count } = this.state;
  //     this.setState({
  //       count: 1 + count,
  //     });
  //   }
  render() {
    return (
      <div>
        <span>카운트 : {this.state.count}</span>
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}

export default Counter;
