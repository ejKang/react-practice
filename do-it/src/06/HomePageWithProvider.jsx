import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ButtonWithLoadingContext from './ButtonWithLoadingContext';
import LoadingProvider from './LoadingProvider';

function RowBComponent() {
  return <button>RowBComponent - Button</button>;
}

function RowCComponent() {
  return <ButtonWithLoadingContext label="Button">Button</ButtonWithLoadingContext>; // consumer call
}

function TableComponent() {
  return (
    <table>
      <RowBComponent></RowBComponent>
      <RowCComponent></RowCComponent>
    </table>
  );
}

// const TableComponent = () => <ButtonWithLoadingContext label="Button"></ButtonWithLoadingContext>;

class HomePageComponentWithProvider extends PureComponent {
  render() {
    return (
      <LoadingProvider>
        <TableComponent></TableComponent>
        <ButtonWithLoadingContext label={'Change State'}>Change State</ButtonWithLoadingContext>
      </LoadingProvider>
    );
  }
}

HomePageComponentWithProvider.childContextTypes = {
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};
export default HomePageComponentWithProvider;
