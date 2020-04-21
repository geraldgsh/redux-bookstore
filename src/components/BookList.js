import React from "react";
import { connect } from "react-redux";
import Book from "Books.js";

const BookList = ({ books }) => {
  return (
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
        {Object.values(books).map((book) => (
          <Book key={book.id} title={book.title} category={book.category} />
        ))}
      </tbody>
    </table>
  );
};

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

export default connect(mapStateToProps)(BookList);
