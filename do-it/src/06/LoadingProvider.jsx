import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoadingProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
    this.setLoading = this.setLoading.bind(this);
  }

  getChildContext() {
    // consumer get state and set function from this function
    return {
      loading: this.state.loading,
      setLoading: this.setLoading,
    };
  }

  setLoading(loading) {
    this.setState({ loading });
  }

  render() {
    return this.props.children;
  }
}

LoadingProvider.childContextTypes = {
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default LoadingProvider;
