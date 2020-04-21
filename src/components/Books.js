import React from 'react';
import PropTypes from 'prop-types';

const Books = ({ book, removeBook }) => (
  <tr key={book.id}>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td>
      <button type="submit" onClick={() => removeBook(book)}>
        Remove Book
      </button>
    </td>
  </tr>
);

Books.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Books;
