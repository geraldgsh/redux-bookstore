import React from 'react';
import BookList from './components/BookList';
import BooksForm from './components/BooksForm';
import './App.css';

const App = () => (
  <div className="App">
    <BookList />
    <BooksForm />
  </div>
);

export default App;
