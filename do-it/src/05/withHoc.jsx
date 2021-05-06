import React from 'react';

export default function withHoc(WrapperedComponent) {
  const { displayName, name } = WrapperedComponent;
  const wrappedComponentName = displayName || name;
  return class WithHoC extends React.Component {
    static displayName = `withHoc(${wrappedComponentName})`;
    render() {
      return <WrapperedComponent {...this.props} />;
    }
  };
}
