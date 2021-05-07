import React from 'react';

import lifecycle from 'recompose/lifecycle';

function Page({ content }) {
  return <div> Page Loading !{content}</div>;
}

export const withLoadData = lifecycle({
  state: { isLoading: true, content: '' },
  componentDidMount: function () {
    if (this.props.loadData) {
      this.props.loadData().then((content) => this.setState({ isLoading: false, content }));
    }
  },
});

export const PageWithLoadData = withLoadData(Page);
