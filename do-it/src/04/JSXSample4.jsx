import React, { Component } from 'react';
import '../sass/materialize.scss';
import InputWithStyle from './InputWithStyle';

class JSXSample4 extends Component {
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
        <nav>
          <div className="nav-wrapper">
            <div>두잇! 리액트 시작하기</div>
          </div>
        </nav>
        <h1>머티리얼 CSS</h1>
        <br />
        <InputWithStyle
          type={'text'}
          name={'aa'}
          errorMessage={'error332'}
          label={'labelTT'}
          onChange={this.testOnChange}
          autoFocus={true}
        ></InputWithStyle>
      </div>
    );
  }
}

export default JSXSample4;
