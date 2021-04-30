import React, { Component } from 'react';
import Counter2 from '../03-8-9-10/Counter2';
import Input from '../03-8-9-10/Input';
import ListExample from '../03-8-9-10/ListExample';
import ScrollSpy from '../03-8-9-10/ScrollSpy';
import '../sass/materialize.scss';

class JSXSample2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }
  testOnChange() {
    console.log('ssssss');
  }
  render() {
    return (
      <div className="body">
        <ListExample></ListExample>
        {/* <Counter2 count={this.state.count} onAdd={this.increaseCount}></Counter2> */}
        <Counter2 count={this.state.count}></Counter2>
        <br />
        <ScrollSpy></ScrollSpy>
        <br />
        <Input
          type={'text'}
          name={'aa'}
          errorMessage={'error332'}
          label={'labelTT'}
          onChange={this.testOnChange}
          autoFocus={true}
        ></Input>
        <br />
        <nav>
          <div className="nav-wrapper">
            <div>두잇! 리액트 시작하기</div>
          </div>
        </nav>
        <h1>머티리얼 CSS</h1>
      </div>
    );
  }
}

export default JSXSample2;
