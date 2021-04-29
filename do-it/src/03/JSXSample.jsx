import React from 'react';
import MyComponent from '../03-6/MyComponent';
import MyPureComponent from '../03-6/MyPureComponent';
import TodaysPlanApp from '../03-7/TodaysPlanApp';
import BooleanComponent from './BooleanComponent';
import ChildComponent from './ChildComponent';
import ChildComponent2 from './ChildComponent2';
import ChildProperty from './ChildProperty';
import Counter from './Counter';
import DefaultPropsComponent from './DefaultPropsComponent';
import ForceUpdateExample from './ForceUpdateExample';
import LifecycleExample from './LifecycleExample';
import NewCounter from './NewCounter';
import PropsComponent from './PropsComponent';
import StateExample from './StateExample';
import TodaysPlan from './TodaysPlan';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { hasDestroyed: false };

    // this.state = { count: 10 };
    // this.resetCount = this.resetCount.bind(this);
    this.listValue = [{ name: 'Park' }, { name: 'Lee' }];
    this.state = { version: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  resetCount() {
    this.setState(({ count }) => ({ count: count + 10 }));
  }
  componentDidMount() {
    this.setState({ hasDestroyed: true });
  }
  handleClick() {
    setTimeout(() => {
      this.listValue[0].name = 'Justin';
      // this.setState({ version: 1 });
    }, 100);
    setTimeout(() => {
      this.listValue = [{ name: 'Justin' }, { name: 'Lee' }];
      // this.setState({ version: 2 });
    }, 200);
  }
  render() {
    const array = [1, 2, 3];
    const obj = { name: '제목', age: 30 };
    const obj2 = { age: 30 };
    const node = <h1>노드</h1>;
    const func = () => {
      console.log('메시지1');
    };
    return (
      <div className="body">
        <img src="http://www.easyspub.co.kr/images/logo_footer.png" />
        <div> 안녕하세요</div>
        <TodaysPlan></TodaysPlan>
        <br />
        <PropsComponent name="두잇 리액트"></PropsComponent>
        <br />
        <ChildComponent
          boolValue={true}
          numValue={1}
          arrayValue={array}
          // objValue={obj}
          nodeValue={node}
          funcValue={func}
        ></ChildComponent>
        <br />
        <div>
          <div>
            <b>지루할 때:</b>
            <BooleanComponent bored></BooleanComponent>
          </div>
          <div>
            <b>즐거울 때:</b>
            <BooleanComponent></BooleanComponent>
          </div>
        </div>
        <br />
        <ChildComponent2 objValue={obj2} requiredStringValue="문자"></ChildComponent2>
        <br />
        <DefaultPropsComponent
          boolValue={false}
          boolValueWithoutDefault={false}
        ></DefaultPropsComponent>
        <br />
        <DefaultPropsComponent></DefaultPropsComponent>
        <br />
        <ChildProperty>
          <div>
            <span>자식 노드</span>
          </div>
        </ChildProperty>
        <br />
        <StateExample></StateExample>
        <br />
        <ForceUpdateExample></ForceUpdateExample>
        <br />
        {/* <Counter></Counter> */}
        <br />
        <LifecycleExample></LifecycleExample>
        {/* {this.state.hasDestroyed ? null : <LifecycleExample></LifecycleExample>} */}
        <br />
        <div>
          <Counter count={this.state.count}></Counter>
          <br />
          <NewCounter count={this.state.count}></NewCounter>
          <br />
          <button onClick={this.resetCount}>{this.state.count + 10}으로 초기화</button>
        </div>
        <br />
        <div>
          <MyComponent value={this.listValue}></MyComponent>
          <MyPureComponent value={this.listValue}></MyPureComponent>
          <button onClick={this.handleClick}>Button</button>
        </div>
        <br />
        <TodaysPlanApp></TodaysPlanApp>
      </div>
    );
  }
}
export default App;
