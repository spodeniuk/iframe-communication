import React from 'react';
import ReactDOM from 'react-dom';

import { Preview } from './Preview';
import { StoreFront } from './StoreFront';

import './index.css';

import reportWebVitals from './reportWebVitals';

const AppCondition = () => {
  if(window.location === window.parent.location /* && 'domain check here too. shouldn't be preview domain' */) return <StoreFront />

  return <Preview />
}

ReactDOM.render(
  <React.StrictMode>
    <AppCondition />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
