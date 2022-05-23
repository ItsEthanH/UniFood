import React, { useState } from 'react';

import classes from './ResultSidebarCard.module.css';

function ResultSidebarCard(props) {
  const [quantity, setQuantity] = useState(1);

  function increaseQuantity() {
    setQuantity((qty) => qty + 1);
  }

  function decreaseQuantity() {
    if (quantity === 0) {
      return;
    }
    setQuantity((qty) => qty - 1);
  }

  return (
    <li className={classes.card}>
      <img src={props.src} alt="placeholder" />
      <div className={classes.text}>
        <p>{props.name}</p>
        <div className={classes.controls}>
          <button onClick={decreaseQuantity}>-</button>
          <p className={classes.qty}>{quantity}</p>
          <button onClick={increaseQuantity}>+</button>
        </div>
      </div>
      <div className={classes.date}>
        <p>Uncatagorised</p>
      </div>
    </li>
  );
}

export default ResultSidebarCard;
