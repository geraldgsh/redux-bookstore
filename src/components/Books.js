import React from 'react';
import PropTypes from 'prop-types';

const Books = ({ book, removeBookFromList }) => {
  const percentage = Math.floor(Math.random() * 100);
  const piePercent = Math.round(percentage / 25) * 25;
  return (
    <div className="book" key={book.id}>
      <div id="left">
        <h5 className="category font-header">{book.genre}</h5>
        <h2 className="title font-header">{book.title}</h2>
        <h4 className="author">{book.author}</h4>
        <div className="actions">
          <button type="button" disabled>Comments</button>
          <button type="button" onClick={() => removeBookFromList(book)}>
            Remove Book
          </button>
          <button type="button" disabled>Edit</button>
        </div>
      </div>
      <div id="center">
        <div className={`pie-graph-${piePercent}`} />
        <div className="percent">
          <h1 className="percentage">
            {percentage}
            %
          </h1>
          <h4 className="completed">Completed</h4>
        </div>
      </div>
      <div id="right">
        <div className="current all-caps">Current Chapter</div>
        <div className="chapter">Chapter 11</div>
        <button type="button">Update Progress</button>
      </div>
    </div>
  );
};

Books.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    genre: PropTypes.string,
  }).isRequired,
  removeBookFromList: PropTypes.func.isRequired,
};

export default Books;
