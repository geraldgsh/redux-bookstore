import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import * as serviceWorker from './serviceWorker';

import rootReducer from './reducers/index';
import App from './App';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 1000),
      title: 'Angels and Demons',
      category: 'Action',
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: 'Angel',
      category: 'Horror',
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: 'Buffy The Vampire Slayer',
      category: 'Sci-Fi',
    },
  ],
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
