import React, { Component } from 'react';
import HomePageComponent from '../06/HomePageComponent';
import HomePageComponentWithProvider from '../06/HomePageWithProvider';
import { PageWithLoadData } from './lifecycle';
import { CounterWithCountState } from './withState';

class JSXSample5 extends Component {
  render() {
    return (
      <div>
        <br />
        <CounterWithCountState></CounterWithCountState>
        <br />
        <PageWithLoadData loadData={() => fetch('/').then(() => 'hello')}></PageWithLoadData>
        <br />
        <HomePageComponent></HomePageComponent>
        <br />
        <HomePageComponentWithProvider></HomePageComponentWithProvider>
      </div>
    );
  }
}

export default JSXSample5;
