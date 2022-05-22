import React from 'react';

import classes from './ResultSidebarCard.module.css';

import placeholder from '../../assets/search/placeholder-sidebar.jpg';

function ResultSidebarCard(props) {
  return (
    <div className={classes.card}>
      <img src={placeholder} alt="placeholder" />
      <div className={classes.text}>
        <p>Velvet Victoria Cake</p>
        <button>-</button>
        <p className={classes.qty}>1</p>
        <button>+</button>
      </div>
      <div className={classes.date}>
        <p>Uncatagorised</p>
      </div>
    </div>
  );
}

export default ResultSidebarCard;
