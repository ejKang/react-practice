import React, { Component } from 'react';

class ListExample2 extends Component {
  render() {
    // return [1, 2, 3].map((num) => <div></div>);
    return (
      <>
        <input type="radio" name="option1" value="1" label="1 @@"></input>
        <input type="radio" name="option2" value="2" label="2 @@"></input>
        <input type="radio" name="option3" value="3" label="3 @@"></input>
      </>
    );
  }
}

export default ListExample2;
