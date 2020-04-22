import { CHANGE_FILTER } from '../actions/index';

const filterReducer = (state = 'All', action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case CHANGE_FILTER:
      return action.category;
    default:
      return state;
  }
};

export default filterReducer;
