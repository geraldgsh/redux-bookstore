import { CREATE_BOOK, REMOVE_BOOK, FETCH_BOOKLIST } from '../actions/index';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_BOOKLIST:
      return [...action.response];
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.book.id);
    default:
      return state;
  }
};

export default bookReducer;
