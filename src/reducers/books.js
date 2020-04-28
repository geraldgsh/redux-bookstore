import { CREATE_BOOK, REMOVE_BOOK,
  FETCH_BOOKLIST_REQUEST, FETCH_BOOKLIST_SUCCESS, FETCH_BOOKLIST_FAILURE,
} from '../actions/index';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_BOOKLIST_REQUEST:
      return [...state];

    case FETCH_BOOKLIST_SUCCESS:
      return [...action.response];

    case FETCH_BOOKLIST_FAILURE:
      return [...state];

    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.book.id);
    default:
      return state;
  }
};

export default bookReducer;
