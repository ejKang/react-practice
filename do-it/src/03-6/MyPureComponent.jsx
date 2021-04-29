import React, { Component } from 'react';

class MyPureComponent extends Component {
  componentDidUpdate() {
    console.log('MypureComponent Refreshed!');
  }
  render() {
    return (
      <div>
        <span>MyPureComponent</span>
      </div>
    );
  }
}

export default MyPureComponent;
