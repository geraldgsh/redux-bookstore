import React from 'react';
import BookList from './containers/BookList';
import BooksForm from './containers/BooksForm';
import './App.css';

const App = () => (
  <div className="App">
    <BookList />
    <BooksForm />
  </div>
);

export default App;
