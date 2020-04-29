import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBookToList } from '../actions/index';
import '../assets/css/BookForm.css';
import { categories } from '../constants/categories';


class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: Math.floor(Math.random() * 1000),
      title: '',
      author: '',
      genre: categories[0],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectForm = React.createRef();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    const { addBookToList } = this.props;
    e.preventDefault();
    addBookToList(this.state);
    this.reset();
  }

  reset() {
    this.selectForm.current.scrollIntoView({ behavior: 'smooth' });
    this.setState({
      // id: Math.floor(Math.random() * 1000),
      title: '',
      author: '',
      genre: categories[0],
    });
  }

  render() {
    const { title, author, genre } = this.state;
    const { status } = this.props;
    const { errors } = status;
    const errorDiv = error => (
      <div key={error}>
        {error}
      </div>
    );
    return (
      <div className="bg-header round-bottom box-shadow">
        <div className="center max-width-90 border-top">
          <div className="formTitle">Add New Book</div>
          <div className="errors">
            {errors.map(error => errorDiv(error))}
          </div>
          <form ref={this.selectForm} onSubmit={this.handleSubmit} className="bookForm">
            <div>
              <input
                placeholder="Book Title"
                name="title"
                type="text"
                value={title}
                onChange={this.handleChange}
              />
              <input
                placeholder="Book Author"
                name="author"
                type="text"
                value={author}
                onChange={this.handleChange}
              />
            </div>
            <select className="font-header" name="genre" placeholder="Genre" value={genre} onChange={this.handleChange}>
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
  status: PropTypes.instanceOf(Object).isRequired,
  addBookToList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  status: state.status,
});

const mapDispatchToProps = dispatch => ({
  addBookToList: book => {
    dispatch(addBookToList(book));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
