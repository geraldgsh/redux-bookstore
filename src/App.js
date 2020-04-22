import React from 'react';
import BookList from './components/BookList';
import BooksForm from './components/BooksForm';
// import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <BookList />
    <BooksForm />
  </div>
);

export default App;
