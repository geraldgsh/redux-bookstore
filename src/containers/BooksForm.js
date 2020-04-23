import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';
import '../assets/css/BookForm.css';
import { categories } from '../constants/categories';


class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor(Math.random() * 1000),
      title: '',
      category: categories[0],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target.name === 'title') {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.name === 'category') {
      this.setState({
        category: e.target.value,
      });
    }
  }

  handleSubmit(e) {
    const { title } = this.state;
    const { createBook } = this.props;
    e.preventDefault();
    if (title) {
      createBook(this.state);
      this.reset();
    }
  }

  reset() {
    this.setState({
      id: Math.ceil(Math.random() * 1000),
      title: '',
      category: categories[0],
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <div className="bg-grey round-bottom box-shadow">
        <div className="center max-width-90 border-top">
          <div className="formTitle">Add New Book</div>
          <form onSubmit={this.handleSubmit} className="bookForm">
            <input
              placeholder="Book Title"
              name="title"
              type="text"
              value={title}
              onChange={this.handleChange}
            />
            <select name="category" placeholder="Category" value={category} onChange={this.handleChange}>
              {categories.map(category => (
                <option key={category}>{category}</option>
              ))}
            </select>
            <button type="submit">Add Book</button>
          </form>
        </div>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
