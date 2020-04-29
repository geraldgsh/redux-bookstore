import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Books';
import { removeBookFromList, changeFilter, fetchBookList } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import '../assets/css/BookList.css';
import Logo from '../assets/images/reactRedux.svg';
import reactLogo from '../assets/images/logo.svg';
import reduxLogo from '../assets/images/redux.svg';

const BookList = ({
  books, filter, status, fetchBookList, removeBookFromList, changeFilter,
}) => {
  // useEffect(() => {
  //   fetchBookList();
  // }, []);
  const filteredBooks = (filter !== 'All') ? books.filter(book => book.genre === filter) : books;

  const { isLoading } = status;
  const renderMain = isLoading
    ? (
      <div className="text-center">
        <div className="loader center" />
        <h1 className="text-white">Loading...</h1>
      </div>
    )
    : (
      <div className="center max-width-90 bookSection">
        {filteredBooks.map(book => (
          <Book book={book} key={book.id + book.title} removeBookFromList={removeBookFromList} />
        ))}
      </div>
    );
  return (
    <div>
      <header className="m-b bg-header round-top">
        <div className="center max-width-90 flex-row">
          <h1 className="app-title">
            Bookstore CMS
          </h1>
          <div className="cat-title">
            <span className="text-grey">Books</span>
          </div>
          <div className="categories text-center">
            <span className="text-grey">Genres</span>
            <CategoryFilter changeFilter={changeFilter} />
          </div>
          <img className="logo show-sm" src={Logo} alt="react-redux logo" />
          <img className="logo show-md" src={reduxLogo} alt="redux logo" />
          <div className="logo-container hide-sm hide-md">
            <img className="logo" src={reactLogo} alt="react logo" />
            <img className="logo" src={reduxLogo} alt="redux logo" />
          </div>
        </div>
      </header>
      <main className="bg-main">
        {renderMain}
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
  status: PropTypes.instanceOf(Object).isRequired,
  fetchBookList: PropTypes.func.isRequired,
  removeBookFromList: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
  status: state.status,
});

const mapDispatchToProps = dispatch => ({
  fetchBookList: () => {
    dispatch(fetchBookList());
  },
  removeBookFromList: book => {
    dispatch(removeBookFromList(book));
  },
  changeFilter: category => {
    dispatch(changeFilter(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
