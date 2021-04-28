import React, { Component } from 'react';

class StateExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      formData: 'no data',
    };

    this.handleData = this.handleData.bind(this);
    this.handleData2 = this.handleData2.bind(this);
    this.handleData3 = this.handleData3.bind(this);
    setTimeout(this.handleData2, 4000);
  }
  handleData() {
    const data = 'new data ';
    const { formData } = this.state;

    this.setState({
      loading: false,
      formData: data + formData,
    });
    console.log('loading값', this.state.loading);
  }
  handleData2(data) {
    this.setState(function (prevState) {
      const newState = {
        loading: false,
        formData: data + prevState.formData,
      };
      return newState;
    });
  }
  handleData3(data) {
    this.setState((prevState) => ({
      loading: false,
      formData: data + prevState.formData,
    }));
  }
  render() {
    return (
      <div>
        <span>로딩중: {String(this.state.loading)}</span>
        <span>결과: {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;
