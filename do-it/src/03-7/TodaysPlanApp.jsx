import React, { Component } from 'react';
import TodaysPlan from '../03/TodaysPlan';

class TodaysPlanApp extends Component {
  render() {
    const { onButtonClick, hasPlan } = this.props;
    return (
      <div className="body">
        {hasPlan ? <TodaysPlan></TodaysPlan> : null}
        <button onClick={onButtonClick}>계획없음</button>
      </div>
    );
  }
}

function TodaysPlanApp1(props) {
  const { onButtonClick, hasPlan } = props;
  return (
    <div className="body">
      {hasPlan ? <TodaysPlan></TodaysPlan> : null}
      <button onClick={onButtonClick}>계획없음</button>
    </div>
  );
}

export default TodaysPlanApp;
