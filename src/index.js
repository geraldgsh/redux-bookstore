import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './assets/css/index.css';

import rootReducer from './reducers/index';
import App from './App';

const URL = 'https://arn-bookstore-backend.herokuapp.com/';
async function populateBooks() {
  const books = await axios.get(`${URL}`)
    .then(response => response.data)
    .catch(error => { throw new Error(error); });

  const initialState = {
    books,
  };

  const store = createStore(rootReducer, initialState);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
}

populateBooks();
