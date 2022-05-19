import React from 'react';
import classes from './NextMeal.module.css';

import placeholder from '../../assets/dashboard/placeholder-meal.jpg';
import serves from '../../assets/dashboard/serves.svg';
import time from '../../assets/dashboard/time.svg';

import DashboardTitle from './DashboardTitle';
import MealInfo from './MealInfo';
import MealRating from './MealRating';

function NextMeal() {
  const sampleMeal = {
    title: 'Pasta and Parmasean',
    time: '1 hour',
    servings: 4,
  };
  return (
    <div className={classes['next-meal']}>
      <DashboardTitle>Next Meal</DashboardTitle>
      <div className={classes['next-meal__card']}>
        <div className={classes['next-meal__image']}>
          <img src={placeholder} alt="" />
        </div>
        <div className={classes['next-meal__text']}>
          <h4>{sampleMeal.title}</h4>
          <MealRating />
          <MealInfo icon={time} alt="Time" text={sampleMeal.time} />
          <MealInfo
            icon={serves}
            alt="Time"
            text={`${sampleMeal.servings} Servings`}
          />
        </div>
      </div>
    </div>
  );
}

export default NextMeal;
