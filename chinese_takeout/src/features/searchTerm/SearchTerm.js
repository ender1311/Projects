import React from 'react';
import { setSearchTerm, clearSearchTerm } from './searchTermSlice.js';
import './SearchTerm.css'

const searchIconUrl = 
'https://files.nohat.cc/file-tmp/m2i8G6H7d3d3H7K9.png';
//  'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg';
const clearIconUrl =
 'https://freesvg.org/img/close-button.png';
  //  'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg';

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
      <img id="search-icon" alt="search" src={searchIconUrl} />
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={onSearchTermChangeHandler}
        placeholder="    Search products"
        
      />
      {searchTerm.length > 0 && (
        <button
          onClick={onClearSearchTermHandler}
          type="button"
          id="search-clear-button"
          margin="20px"
        >
          <img id="clear-icon" src={clearIconUrl} alt="clear icon"  />
        </button>
      )}
      <p>Try searching for "chicken", "beef", "tofu", or "kung pao"</p>
    </div>
  );
};
