import React, { useEffect } from 'react';

import {
  calculatePrice,
  getCurrencySymbol,
} from '../../utilities/utilities.js';

import { addItem } from '../cart/cartSlice.js';
import { loadData } from './inventorySlice.js';
import './Inventory.css';

export const Inventory = ({ inventory, currencyFilter, dispatch }) => {
  const onMount = () => {
    dispatch(loadData());
  };
  useEffect(onMount, [dispatch]);

  const onClickHandler = (inventoryItem) => {
    dispatch(addItem(inventoryItem));
  };

  if (inventory.length === 0) {
    return <p> Sorry, no products are currently available... </p>;
  }

  return <ul id="inventory-container">{inventory.map(createInventoryItem)}</ul>;

  function createInventoryItem(inventoryItems) {
    const { price, name, img } = inventoryItems;
    const displayPrice = calculatePrice(price, currencyFilter);
    return (
      <div className="image-container">
        {inventoryItems.map((inventoryItem, index) => {
return (
      <li key={inventoryItem.id} className="item">
        <img src={inventoryItem.img} alt={inventoryItem.name} />
        <h3>{inventoryItem.name}</h3>
        <h3 className="price">
          {getCurrencySymbol(currencyFilter)}
          {displayPrice.toFixed(2)} {currencyFilter}
        </h3>
        <button
          onClick={() => onClickHandler(inventoryItem)}
          className="add-to-cart-button"
        >
          Add to Cart
        </button>
      </li>
        );
  })}
      </div>
    );
  }
};
