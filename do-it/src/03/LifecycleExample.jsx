import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifecycleExample extends Component {
  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps 호출 LifecycleExample');
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {};
    console.log('constructor 호출 LifecycleExample');
  }

  //   componentWillMount() {}

  componentDidMount() {
    console.log('componentDidMount 호출 LifecycleExample');
    // this.setState({ updated: true });
    this.forceUpdate();
  }

  //   componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate 호출 LifecycleExample');
    return false;
  }

  //   componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate 호출 LifecycleExample');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount 호출 LifecycleExample');
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate 호출 LifecycleExample');
    return true;
  }

  render() {
    console.log('render 호출 LifecycleExample');
    return <div>LifecycleExample</div>;
  }
}

LifecycleExample.propTypes = {};

export default LifecycleExample;
