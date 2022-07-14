import React, { useState } from 'react';
import getOrdinal from '../../utils/getOrdinal';

import PlanOverlay from './PlanOverlay';

import classes from './styles/ResultSidebarCard.module.css';

function ResultSidebarCard(props) {
  const [planOverlayShown, setPlanOverlayShown] = useState(false);
  const [date, setDate] = useState('Uncatagorised');
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

  function toggleModal() {
    setPlanOverlayShown((prevState) => !prevState);
  }

  function modalSubmitHandler(type, dateObj) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const day = dateObj.getDay();
    const date = dateObj.getDate();
    const ordinal = getOrdinal(date);

    setDate(`${type} - ${days[day]} ${date}${ordinal}`);
  }

  return (
    <li id={props.id} className={`${classes.card} ${removed ? classes.removed : ''}`}>
      {planOverlayShown && <PlanOverlay onClose={toggleModal} onSubmit={modalSubmitHandler} />}
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
      <button onClick={toggleModal} className={classes.date}>
        {date}
      </button>
    </li>
  );
}

export default ResultSidebarCard;
