import React, { useState } from 'react';

import classes from './ResultSidebarCard.module.css';

import placeholder from '../../assets/search/placeholder-sidebar.jpg';

function ResultSidebarCard(props) {
  const [quantity, setQuantity] = useState(1);

  function increaseQuantity() {
    setQuantity((qty) => qty + 1);
  }

  function decreaseQuantity() {
    setQuantity((qty) => qty - 1);
  }

  return (
    <div className={classes.card}>
      <img src={placeholder} alt="placeholder" />
      <div className={classes.text}>
        <p>Velvet Victoria Cake</p>
        <button onClick={decreaseQuantity}>-</button>
        <p className={classes.qty}>{quantity}</p>
        <button onClick={increaseQuantity}>+</button>
      </div>
      <div className={classes.date}>
        <p>Uncatagorised</p>
      </div>
    </div>
  );
}

export default ResultSidebarCard;
