import axios from 'axios';

const URL = 'https://arn-bookstore-backend.herokuapp.com/';

const FETCH_BOOKLIST_REQUEST = 'FETCH_BOOKLIST_REQUEST';
const FETCH_BOOKLIST_SUCCESS = 'FETCH_BOOKLIST_SUCCESS';
const FETCH_BOOKLIST_FAILURE = 'FETCH_BOOKLIST_FAILURE';
const CREATE_BOOK_REQUEST = 'CREATE_BOOK_REQUEST';
const CREATE_BOOK_SUCCESS = 'CREATE_BOOK_SUCCESS';
const CREATE_BOOK_FAILURE = 'CREATE_BOOK_FAILURE';
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

const fetchBookListRequest = () => ({
  type: FETCH_BOOKLIST_REQUEST,
});

const fetchBookListSuccess = books => ({
  type: FETCH_BOOKLIST_SUCCESS,
  response: books,
});

const fetchBookListFailure = error => ({
  type: FETCH_BOOKLIST_FAILURE,
  response: error,
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
  dispatch(fetchBookListRequest());
  axios.get(`${URL}`)
    .then(response => dispatch(fetchBookListSuccess(response.data)))
    .catch(error => dispatch(fetchBookListFailure(error.message)));
};

const addBookToList = book => dispatch => {
  console.log(book);
  axios.post(`${URL}api/v1/books`, {
    title: book.title,
    author: book.author,
    genre: book.genre,
  })
    .then(response => {
      const newBook = response.data;
      return dispatch(createBook(newBook.data));
    })
    .catch(error => { throw new Error(error); });
};

export {
  CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER,
  FETCH_BOOKLIST_REQUEST, FETCH_BOOKLIST_SUCCESS, FETCH_BOOKLIST_FAILURE,
  createBook, removeBook, changeFilter, addBookToList,
  fetchBookListRequest, fetchBookListSuccess, fetchBookListFailure, fetchBookList,
};
