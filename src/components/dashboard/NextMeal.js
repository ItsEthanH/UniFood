import React from 'react';
import classes from './NextMeal.module.css';

import DashboardTitle from './DashboardTitle';

function NextMeal() {
  return (
    <div className={classes['next-meal']}>
      <DashboardTitle>Next Meal</DashboardTitle>
      <div className={classes['next-meal__card']}></div>
    </div>
  );
}

export default NextMeal;
