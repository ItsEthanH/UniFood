import React from 'react';
import classes from './NextMeal.module.css';

import placeholder from '../../assets/dashboard/placeholder-meal.jpg';

import DashboardTitle from './DashboardTitle';
import DashboardCard from './DashboardCard';

function NextMeal() {
  return (
    <div className={classes['next-meal']}>
      <DashboardTitle>Next Meal</DashboardTitle>
      <DashboardCard
        type="Breakfast"
        name="Velvet Victoria Sponge"
        src={placeholder}
        next={true}
      />
    </div>
  );
}

export default NextMeal;
