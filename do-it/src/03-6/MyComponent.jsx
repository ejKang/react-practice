import React, { Component } from 'react';

class MyComponent extends Component {
  componentDidUpdate() {
    console.log('MyComponent Refreshed! ');
  }
  render() {
    return (
      <div>
        <span>MyComponent</span>
      </div>
    );
  }
}

export default MyComponent;
