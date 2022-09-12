import React from 'react';

import classes from './styles/DashboardCard.module.css';

function DashboardCard(props) {
  return (
    <div className={classes.card}>
      <img src={props.src} alt="Alt" />
      <div className={classes.text}>
        <h3 className="body-large color-white">{props.type}</h3>
        <h4 className="body-large color-white">{props.name}</h4>
      </div>
    </div>
  );
}

export default DashboardCard;
