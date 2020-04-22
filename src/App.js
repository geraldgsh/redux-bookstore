import React from 'react';
import BookList from './containers/BookList';
import BooksForm from './containers/BooksForm';
import './App.css';

const App = () => (
  <div className="App">
    <div className="backBG bg-dark-grey">
      <div className="container center">
        <BookList />
        <BooksForm />
      </div>
    </div>
  </div>
);

export default App;
