import React from 'react';

import { currenciesData } from '../../data/data.js';
import { setCurrency } from './currencyFilterSlice.js';

export const CurrencyFilter = ({ currencyFilter, dispatch }) => {
  const onClickHandler = (currency) => {
    dispatch(setCurrency(currency));
  };

  return (
    <div id="currency-filters-container">
      <h2>Welcome to Great Wall Chinese Menu</h2>
      <h3>Choose a currency</h3>
      {currenciesData.map(createCurrencyButton)}
    </div>
  );

  function createCurrencyButton(currency) {
    return (
      <button
        className={`currency-button ${
          currencyFilter === currency && 'selected'
        }`}
        key={currency}
        onClick={() => onClickHandler(currency)}
      >
        {currency}
      </button>
    );
  }
};
