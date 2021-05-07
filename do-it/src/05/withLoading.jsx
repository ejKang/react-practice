import React from 'react';

export default function withLoading(WrappedComponent) {
  const { displayName, name: componentName } = WrappedComponent;
  const wrappedComponentName = displayName || componentName;

  function WithLoading({ isLoading, ...otherProps }) {
    // 필요한 프로퍼티만 구조 할당 표현식으로 추출하기
    if (isLoading) return '로딩 중';

    return <WrappedComponent {...otherProps} />;
  }
  WithLoading.displayName = `withLoading(${wrappedComponentName})`;
  return WithLoading;
}

export const tt = function withLoading(WrappedComponent, loadingMessage = '로딩 중') {
  const { displayName, name: componentName } = WrappedComponent;
  const wrappedComponentName = displayName || componentName;

  function WithLoading({ isLoading, ...otherProps }) {
    if (isLoading) return loadingMessage;

    return <WrappedComponent {...otherProps} />;
  }
  WithLoading.displayName = `withLoading(${wrappedComponentName})`;
  return WithLoading;
};

export const tt3 = function (loadingMessage = '로딩 중') {
  return function withLoading(WrappedComponent) {
    const { displayName, name: componentName } = WrappedComponent;
    const wrappedComponentName = displayName || componentName;
    function WithLoading({ isLoading, ...otherProps }) {
      if (isLoading) return loadingMessage;

      return <WrappedComponent {...otherProps} />;
    }
    WithLoading.displayName = `withLoading(${wrappedComponentName})`;
    return WithLoading;
  };
};
