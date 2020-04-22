import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Books';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import '../assets/css/BookList.css';
import logo from '../assets/images/logo.svg';

const BookList = ({
  books, filter, removeBook, changeFilter,
}) => {
  const filteredBooks = (filter !== 'All') ? books.filter(book => book.category === filter) : books;
  return (
    <div>
      <header className="m-b bg-white round-top">
        <div className="center max-width-90 flex-row">
          <h1 className="app-title">
            Bookstore CMS
          </h1>
          <div className="text-center">
            Categories
            <CategoryFilter changeFilter={changeFilter} />
          </div>
          <img className="react-logo" src={logo} alt="logo" />
        </div>
      </header>
      <main className="bg-grey">
        <div className="center max-width-90 bookSection">
          {filteredBooks.map(book => (
            <Book book={book} key={book.id} removeBook={removeBook} />
          ))}
        </div>
      </main>
    </div>
  );
};

BookList.defaultProps = {
  filter: 'All',
};

BookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  filter: PropTypes.string,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
  changeFilter: category => {
    dispatch(changeFilter(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
