import React from 'react';
import TodaysPlan from './TodaysPlan';

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <img src="http://www.easyspub.co.kr/images/logo_footer.png" />
        <div> 안녕하세요</div>
        <TodaysPlan></TodaysPlan>
      </div>
    );
  }
}
export default App;
