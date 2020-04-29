import { combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';
import loaderReducer from './loading';

const rootReducer = combineReducers({
  books: booksReducer,
  filter: filterReducer,
  status: loaderReducer,
});

export default rootReducer;
