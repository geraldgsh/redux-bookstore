import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BookList from './containers/BookList';
import BooksForm from './containers/BooksForm';
import './assets/css/App.css';

const App = ({ status }) => {
  console.log(status);
  const { isLoading } = status.isLoading;
  if (status.errors) {
    return (
      <div>
        {status.errors.join('\n')}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <div className="center max-width-90 flex-row">
          <div className="loader" />
          <h1 className="text-black text-center">
            Loading...
          </h1>
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      <div className="backBG bg-dark">
        <div className="container center">
          <BookList />
          <BooksForm />
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  status: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  status: state.status,
});

export default connect(mapStateToProps, null)(App);
