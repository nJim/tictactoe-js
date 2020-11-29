import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './components/5-app/App';
import * as serviceWorker from './serviceWorker';
import './components/0-base/global.css';

ReactDOM.render(
  <React.StrictMode>
    <Fragment>
      <App />
    </Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();