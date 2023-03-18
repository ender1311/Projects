import React from 'react';
import {
  calculateTotal,
  getCurrencySymbol,
} from '../../utilities/utilities.js';

// Import the changeItemQuantity() action creator.
import {changeItemQuantity} from './cartSlice.js';
import "./cart.css";


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
      <ul id="cart-items" title="Cart Items">{cartElements}</ul>
      
      {/* <hr style={{borderTop: "3px solid white", width: "20%"}} /> */}

      <p className="total"
          style={{fontSize:"40px", fontWeight:"bold"}}
          >
        Total:{''}
        <span className="total-value"
              style={{fontSize:"40px", fontWeight:"bold", borderWidth:"5px", borderRadius:"10px", borderColor:"white", textAlign: "center" }}
        >
          {getCurrencySymbol(currencyFilter)}{total} {currencyFilter}
        </span>
      </p>
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
            style={{
              color: "white",
              height: "4rem",
              width: "4rem",
              fontSize: "20px",
              borderWidth: "5px",
              borderRadius: "10px",
              borderColor: "white",
              textAlign: "center",
            }}
            onChange={(e) => {
              onInputChangeHandler(name, e.target.value);
            }}
        >
            {[...Array(10).keys()].map((_, index) => (
              <option
                key={index}
                value={index}
                style={{
                  color: "white",
                  fontSize: "20px",
                  textAlign: "center",
                  margin: "20px", // add margin to the option element
                  padding: "20px"
                }}
                className="item-quantity-option"
              >
                {index}
              </option>
            ))}
          </select>

      </li>
    );
  }
};
