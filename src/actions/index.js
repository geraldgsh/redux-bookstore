import axios from 'axios';

const URL = 'https://arn-bookstore-backend.herokuapp.com/';

const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_REQUEST_SUCCESS = 'FETCH_REQUEST_SUCCESS';
const FETCH_REQUEST_FAILURE = 'FETCH_REQUEST_FAILURE';
const FETCH_BOOKLIST = 'FETCH_BOOKLIST';
const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';


// async function fetchBookList() {
//   const books = await axios.get(`${URL}`)
//     .then(response => response.data)
//     .catch(error => { throw new Error(error); });
//   if (!books) { return null; }
//   return books;
// }

// async function addBook(action) {
//   axios.post(`${URL}api/v1/books`, {
//     title: action.book.title,
//     author: action.book.author,
//     genre: action.book.genre,
//   })
//     .then(response => console.log(response))
//     .catch(error => { throw new Error(error); });
// }

const fetchRequest = () => ({
  type: FETCH_REQUEST,
});

const fetchRequestSuccess = response => ({
  type: FETCH_REQUEST_SUCCESS,
  response,
});
const fetchRequestFailure = response => ({
  type: FETCH_REQUEST_FAILURE,
  response,
});

const fetchBookListSuccess = books => ({
  type: FETCH_BOOKLIST,
  response: books,
});

const createBook = book => ({
  type: CREATE_BOOK,
  book,
});

const removeBook = book => ({
  type: REMOVE_BOOK,
  book,
});

const changeFilter = genre => ({
  type: CHANGE_FILTER,
  genre,
});

const fetchBookList = () => dispatch => {
  dispatch(fetchRequest());
  axios.get(`${URL}`)
    .then(response => {
      dispatch(fetchRequestSuccess(response.data.message));
      dispatch(fetchBookListSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchRequestFailure(error.response.error));
    });
};

const addBookToList = book => dispatch => {
  dispatch(fetchRequest());
  axios.post(`${URL}api/v1/books`, {
    title: book.title,
    author: book.author,
    genre: book.genre,
  })
    .then(response => {
      const newBook = response.data;
      dispatch(fetchRequestSuccess(response.data.message));
      dispatch(createBook(newBook.data));
    })
    .catch(error => {
      dispatch(fetchRequestFailure(error.response.error));
      console.log(error.response.error.join(''));
    });
};

const removeBookFromList = book => dispatch => {
  dispatch(fetchRequest());
  axios.delete(`${URL}api/v1/books/${book.id}`)
    .then(response => {
      dispatch(fetchRequestSuccess(response.data.message));
      dispatch(removeBook(book));
    })
    .catch(error => {
      dispatch(fetchRequestFailure(error.response.error));
      console.log(error.response);
    });
};

export {
  CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER, FETCH_BOOKLIST,
  FETCH_REQUEST, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_FAILURE,
  changeFilter, addBookToList, removeBookFromList,
  fetchBookList,
};
