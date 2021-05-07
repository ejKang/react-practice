import React from 'react';
import PropTypes from 'prop-types';
import withLoadingContextAndKey, { loadingPropTypes } from './withLoadingContextAndKey';

ButtonWithLoadingContextAndKey.propTypes = {
  ...loadingPropTypes,
  children: PropTypes.string,
};

function ButtonWithLoadingContextAndKey({ children, loading, setLoading }) {
  return <button onClick={() => setLoading(!loading)}>{loading ? 'Loading..' : children}</button>;
}

export const ButtonWithDefaultLoadingContextAndKey = withLoadingContextAndKey('defaultLoadingKey')(
  ButtonWithLoadingContextAndKey,
);

export const ButtonWithLoading2ContextAndKey = withLoadingContextAndKey('loading2')(
  ButtonWithLoadingContextAndKey,
);
