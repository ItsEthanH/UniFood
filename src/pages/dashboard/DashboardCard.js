import React from 'react';

import classes from './styles/DashboardCard.module.css';

function DashboardCard(props) {
  return (
    <div className={`${classes.card} ${props.next ? '' : classes.next}`}>
      <img src={props.src} alt="Alt" />
      <div className={classes.text}>
        <h3>{props.type}</h3>
        <h4>{props.name}</h4>
      </div>
    </div>
  );
}

export default DashboardCard;
