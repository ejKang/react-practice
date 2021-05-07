import React from 'react';
import PropTypes from 'prop-types';
import createLoadingConsumer from './createLoadingConsumer';

const DefaultLoadingConsumer = createLoadingConsumer();
const Loading2Consumer = createLoadingConsumer('loading2');

function ButtonWithConsumer({ children }) {
  return (
    <div>
      {/* <DefaultLoadingConsumer
        render={({ loading, setLoading }) => (
          <button onClick={() => setLoading(!loading)}>
            {loading ? 'Loading Context1' : children}
          </button>
        )}
      ></DefaultLoadingConsumer>
      <Loading2Consumer
        render={({ loading, setLoading }) => (
          <button onClick={() => setLoading(!loading)}>
            {loading ? 'Loading Context2' : children}
          </button>
        )}
      ></Loading2Consumer> */}
      <DefaultLoadingConsumer
        render={({ loading, setLoading }) => (
          <Loading2Consumer
            render={({ loading: loading2 }) => (
              <button onClick={() => setLoading(!loading)}>
                {loading || loading2 ? 'Loading ' : children}
              </button>
            )}
          ></Loading2Consumer>
        )}
      ></DefaultLoadingConsumer>
    </div>
  );
}

ButtonWithConsumer.propTypes = {
  children: PropTypes.string,
};
export default ButtonWithConsumer;
