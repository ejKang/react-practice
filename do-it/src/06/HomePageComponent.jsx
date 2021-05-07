import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ButtonWithLoadingContext from './ButtonWithLoadingContext';
function RowBComponent() {
  return <button>RowBComponent - Button</button>;
}

function RowCComponent() {
  return <ButtonWithLoadingContext label="Button">Button</ButtonWithLoadingContext>;
}

function TableComponent() {
  return (
    <table>
      <RowBComponent></RowBComponent>
      <RowCComponent></RowCComponent>
    </table>
  );
}

class HomePageComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { loading: false };
    this.setLoading = this.setLoading.bind(this);
    this.toggleLoading = this.toggleLoading.bind(this);
  }

  getChildContext() {
    return {
      loading: this.state.loading,
      setLoading: this.setLoading,
    };
  }

  setLoading(loading) {
    this.setState({ loading });
  }

  toggleLoading() {
    this.setState(({ loading }) => ({ loading: !loading }));
  }

  render() {
    return (
      <div>
        <TableComponent></TableComponent>
        <button onClick={this.toggleLoading}>State Change</button>
      </div>
    );
  }
}

HomePageComponent.childContextTypes = {
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};
export default HomePageComponent;
