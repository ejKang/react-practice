import React from 'react';
import PropTypes from 'prop-types';
import withLoadingContext from './withLoadingContext';

ButtonWithLoadingContext.propTypes = {
  label: PropTypes.string,
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

function ButtonWithLoadingContext({ label, loading, setLoading }) {
  return <button onClick={() => setLoading(!loading)}>{loading ? 'Loading..' : label}</button>;
}

export default withLoadingContext(ButtonWithLoadingContext);
