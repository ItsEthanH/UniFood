import React from 'react';

import classes from './styles/NextMeal.module.css';
import placeholder from '../../assets/placeholders/placeholder-dashboard.jpg';

import DashboardCard from './DashboardCard';

function NextMeal() {
  return (
    <div className={classes['next-meal']}>
      <h3 className="body-large">Next Meal</h3>
      <DashboardCard type="Breakfast" name="Velvet Victoria Sponge" src={placeholder} next={true} />
    </div>
  );
}

export default NextMeal;
