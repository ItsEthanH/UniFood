import React from 'react';
import classes from './MealRating.module.css';

import stars from '../../assets/dashboard/placeholder-stars.png';

function MealRating() {
  return (
    <div className={classes.rating}>
      <img src={stars} alt="4/5 stars" />
    </div>
  );
}

export default MealRating;
