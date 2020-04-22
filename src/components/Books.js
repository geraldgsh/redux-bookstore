import React from 'react';
import PropTypes from 'prop-types';

const Books = ({ book, removeBook }) => (
  <div className="book" key={book.id}>
    <div className="left">
      <h5 className="category">{book.category}</h5>
      <h2 className="title">{book.title}</h2>
      <h4 className="author">Author</h4>
      <div className="Actions">
        <button>Comments</button>
        <button type="submit" onClick={() => removeBook(book)}>
          Remove Book
        </button>
        <button>Edit</button>
      </div>
    </div>
    <div className="center">
      <div className="pie-graph">Pie Graph</div>
      <div className="percent">
        <h1 className="percentage">64%</h1>
        <h4 className="completed">Completed</h4>
      </div>
    </div>
    <div className="right">
      <h3 className="current">Current Chapter</h3>
      <h4 className="chapter">Chapter 11</h4>
      <button className="progress">Update Progress</button>
    </div>
  </div>  
);

Books.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Books;
