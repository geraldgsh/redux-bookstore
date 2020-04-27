import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

//     // axios.post(`${URL}api/v1/books`, {
//     //   title: action.book.title,
//     //   author: action.book.author,
//     //   genre: action.book.genre,
//     // })
//     //   .then(response => {
//     //     console.log(response);
//     //   })
//     //   .catch(error => console.log(error));

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.book.id);
    default:
      return state;
  }
};

export default bookReducer;
