import React, { Component } from 'react';
import { BookList } from './components/BookList';
import logo from './logo.svg';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <BookList />
      <BooksForm />
    </div>
  );
};

export default App;
