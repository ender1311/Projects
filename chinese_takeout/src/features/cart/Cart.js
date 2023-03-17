import React from 'react';
import {
  calculateTotal,
  getCurrencySymbol,
} from '../../utilities/utilities.js';

// Import the changeItemQuantity() action creator.
import {changeItemQuantity} from './cartSlice.js';

export const Cart = (props) => {
  const { cart, currencyFilter, dispatch } = props;

  const onInputChangeHandler = (name, input) => {
    // If the user enters a bad value...
    if (input === '') {
      return;
    }

    // Otherwise, convert the input into a number and pass it along as the newQuantity.
    const newQuantity = Number(input);

    // Dispatch an action to change the quantity of the given name and quantity.
    dispatch(changeItemQuantity(name, newQuantity));
  };

  // Use the cart and currencyFilter slices to render their data.
  const cartElements = Object.keys(cart).map(createCartItem);

  const total = calculateTotal(cart,currencyFilter);

  return (
    <div id="cart-container">
      <ul id="cart-items">{cartElements}</ul>
      <h3 className="total">
        Total{' '}
        <span className="total-value">
          {getCurrencySymbol(currencyFilter)}{total} {currencyFilter}
        </span>
      </h3>
        <img 
        src="https://ender1311.github.io/coding_central/imgs/731d62e418fb3d3747e4b501dc9222dd.gif"
        height="200px"
        width = "auto"
        alt='thank you'
        >
      </img>
    </div>
  );

  function createCartItem(name) {
    const item = cart[name];

    if (item.quantity === 0) {
      return;
    }

    return (
      <li key={name}>
        <p>{name}</p>
        <select
          className="item-quantity"
          value={item.quantity}
          style={{ color: "white", height: "4rem", width: "4rem", fontSize:"20px", borderWidth:"5px", borderRadius:"10px", borderColor:"white" }}
          onChange={(e) => {
            onInputChangeHandler(name, e.target.value);
          }}
        >
          {[...Array(10).keys()].map((_, index) => (
            <option key={index} value={index} style={{ color: "white", fontSize:"20px" }}>
              {index}
            </option>
          ))}
        </select>
      </li>
    );
  }
};
