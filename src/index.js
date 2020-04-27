import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './assets/css/index.css';

import rootReducer from './reducers/index';
import App from './App';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 1000),
      title: 'Angels and Demons',
      author: 'Dan Brown',
      category: 'Action',
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: 'Angel',
      author: 'Joss Whedon',
      category: 'Horror',
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: 'Buffy The Vampire Slayer',
      author: 'Joss Whedon',
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
