import React, { PureComponent } from 'react';
import {
  ButtonWithDefaultLoadingContextAndKey,
  ButtonWithLoading2ContextAndKey,
} from './ButtonWithLoadingContextAndKey';
import LoadingProviderWithKey from './LoadingProviderWithKey';
import ButtonWithConsumer from './ButtonWithConsumer';

const LoadingProvider1 = LoadingProviderWithKey();
const LoadingProvider2 = LoadingProviderWithKey('loading2');

function TableComponent() {
  return (
    <table>
      <ButtonWithDefaultLoadingContextAndKey>Context 1</ButtonWithDefaultLoadingContextAndKey>
      <ButtonWithLoading2ContextAndKey>Context 2</ButtonWithLoading2ContextAndKey>
      <ButtonWithConsumer>Multiple Cunsumer Example</ButtonWithConsumer>
    </table>
  );
}

class HomePageWithTwoProvider extends PureComponent {
  render() {
    return (
      <LoadingProvider1>
        <LoadingProvider2>
          <TableComponent></TableComponent>
        </LoadingProvider2>
      </LoadingProvider1>
    );
  }
}

export default HomePageWithTwoProvider;
