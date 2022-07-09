import React, { useState } from 'react';

import classes from './ResultSidebarCard.module.css';

function ResultSidebarCard(props) {
  const [quantity, setQuantity] = useState(1);
  const [removed, setRemoved] = useState(false);

  function increaseQuantity() {
    setQuantity((qty) => qty + 1);
  }

  function decreaseQuantity() {
    if (quantity === 1) {
      setQuantity(0);
      remove();
      return;
    }
    setQuantity((qty) => qty - 1);
  }

  function remove() {
    setRemoved(true);
    setTimeout(() => {
      props.onRemove();
    }, 250);
  }

  return (
    <li
      id={props.id}
      className={`${classes.card} ${removed ? classes.removed : ''}`}
    >
      <img src={props.src} alt="placeholder" />
      <div className={classes.text}>
        <p>{props.name}</p>
        <div className={classes.controls}>
          <button onClick={decreaseQuantity}>-</button>
          <p className={classes.qty}>{quantity}</p>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <button className={classes.remove} onClick={remove}>
          X
        </button>
      </div>
      <div className={classes.date}>
        <p>Uncatagorised</p>
      </div>
    </li>
  );
}

export default ResultSidebarCard;
