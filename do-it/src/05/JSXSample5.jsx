import React, { Component } from 'react';
import HomePageWithTwoProvider from '../06-2/HomePageWithTwoProvider';
import HomePageComponent from '../06/HomePageComponent';
import HomePageComponentWithProvider from '../06/HomePageWithProvider';
import { PageWithLoadData } from './lifecycle';
import withLoading, { tt, tt3 } from './withLoading';
import { CounterWithCountState } from './withState';
import Text from '../04/Text';
import Button from '../04/Button';
import '../sass/materialize.scss';

class JSXSample5 extends Component {
  render() {
    const TextWithLoading = withLoading(Text);
    const ButtonWithLoading = withLoading(Button);

    const TextWithLoading2 = tt(Text);
    const ButtonWithLoading2 = tt(Button);

    const TextWithLoading3 = tt3('ttttt')(Text);
    const ButtonWithLoading3 = tt3(<Button disabled>Loading..</Button>)(Button);

    return (
      <div className="body">
        <div className="container">
          <br />
          <a>WithLoading</a>
          <TextWithLoading isLoading>TextWithLoading</TextWithLoading>
          <br />
          <ButtonWithLoading>ButtonWithLoading</ButtonWithLoading>
          <br />
          <a>WithLoading+Message</a>
          <TextWithLoading2>TextWithLoading</TextWithLoading2>
          <br />
          <ButtonWithLoading2 isLoading>ButtonWithLoading</ButtonWithLoading2>
          <br />
          <a>WithLoading+Message + Multiple Curring</a>
          <TextWithLoading3 isLoading>TextWithLoading</TextWithLoading3>
          <br />
          <ButtonWithLoading3 isLoading>ButtonWithLoading</ButtonWithLoading3>
        </div>

        <br />
        <CounterWithCountState></CounterWithCountState>
        <br />
        <PageWithLoadData loadData={() => fetch('/').then(() => 'hello')}></PageWithLoadData>
        <br />
        <HomePageComponent></HomePageComponent>
        <br />
        <a>HomePageComponentWithProvider</a>
        <HomePageComponentWithProvider></HomePageComponentWithProvider>
        <br />
        <a>HomePageWithTwoProvider</a>
        <HomePageWithTwoProvider></HomePageWithTwoProvider>
      </div>
    );
  }
}

export default JSXSample5;
