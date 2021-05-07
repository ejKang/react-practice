import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import JSXSample4 from './04/JSXSample4';
import JSXSample5 from './05/JSXSample5';
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <JSXSample4></JSXSample4> */}
    <JSXSample5></JSXSample5>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
