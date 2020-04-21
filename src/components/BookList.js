import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Books';

const BookList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
      </tr>
      <tr>
        <th>Title</th>
      </tr>
      <tr>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {books.map(book => (
        <Book book={book} key={book.id} />
      ))}
    </tbody>
  </table>
);

BookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

export default connect(mapStateToProps)(BookList);
