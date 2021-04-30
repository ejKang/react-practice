import React, { Component } from 'react';

class Counter2 extends Component {
  render() {
    return (
      <div>
        <span>카운 트 : {this.props.count}</span>
        {/* <button onClick={this.props.onAdd()}>카운트 증가</button> */}
        <button>카운트 증가</button>
      </div>
    );
  }
}

export default Counter2;
