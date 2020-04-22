import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/CategoryFilter.css';

const categories = [
  'All',
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const CategoryFilter = ({
  changeFilter,
}) => {
  const selectCat = React.useRef(null);
  return (
    <div>
      <select ref={selectCat} name="category" placeholder="Category" onChange={() => changeFilter(selectCat.current.value)}>
        {categories.map(category => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
