import React from 'react';
import PropTypes from 'prop-types';

export default (WrappedComponent) => {
  const { displyName, name: componentName } = WrappedComponent;
  const wrappedComponentName = displyName || componentName;

  function WithLoadingContext(props, context) {
    const { loading, setLoading } = context;
    return (
      <WrappedComponent {...props} loading={loading} setLoading={setLoading}></WrappedComponent>
    );
  }

  WithLoadingContext.displyName = `withLoadingContext(${wrappedComponentName})`;
  WithLoadingContext.contextTypes = {
    loading: PropTypes.bool,
    setLoading: PropTypes.func,
  };

  return WithLoadingContext;
};
