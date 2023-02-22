import React from 'react';
import { setSearchTerm, clearSearchTerm } from './searchTermSlice.js';
import './SearchTerm.css'
const searchIconUrl =
  'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg';
const clearIconUrl =
  'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg';

export const SearchTerm = (props) => {
  const { searchTerm, dispatch } = props;

  const onSearchTermChangeHandler = (e) => {
    const userInput = e.target.value;
    dispatch(setSearchTerm(userInput));
  };

  const onClearSearchTermHandler = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <div id="search-container">
      <img id="search-icon" alt="" src={searchIconUrl} width="15px" height="16px" />
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={onSearchTermChangeHandler}
        placeholder="Search products"
      />
      {searchTerm.length > 0 && (
        <button
          onClick={onClearSearchTermHandler}
          type="button"
          id="search-clear-button"
          margin="20px"
        >
          <img src={clearIconUrl} alt="" width="15px" height="16px" />
        </button>
      )}
    </div>
  );
};
