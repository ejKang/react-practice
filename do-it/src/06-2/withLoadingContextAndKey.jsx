import React from 'react';
import { DEFAULT_KEY, contextPropsTypes } from './LoadingProviderWithKey'; //import of provider

export const loadingPropTypes = contextPropsTypes;

export default (contextKey = DEFAULT_KEY) => (WrappedComponent) => {
  const { displayName, name: componentName } = WrappedComponent;
  const wrappedComponentName = displayName || componentName;

  function WithLoadingContext(props, context) {
    const { loading, setLoading } = context[contextKey];
    console.log('c', context);

    return (
      <WrappedComponent {...props} loading={loading} setLoading={setLoading}></WrappedComponent>
    );
  }
  WithLoadingContext.displayName = `withLoadingContext(${wrappedComponentName})`;
  WithLoadingContext.contextTypes = {
    [contextKey]: contextPropsTypes,
  };

  return WithLoadingContext;
};
