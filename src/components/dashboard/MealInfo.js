import React from 'react';
import classes from './MealInfo.module.css';

function MealInfo(props) {
  return (
    <div className={classes['meal-info']}>
      <img
        src={props.icon}
        alt={props.alt}
        className={props.stars ? 'stars' : ''}
      />
      <p>{props.text}</p>
    </div>
  );
}

export default MealInfo;
