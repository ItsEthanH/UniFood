import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import classes from './ComingUp.module.css';
import MealInfo from './MealInfo';
import placeholder from '../../assets/dashboard/placeholder-meal.jpg';
import serves from '../../assets/dashboard/serves.svg';
import time from '../../assets/dashboard/time.svg';

function ComingUp() {
  const mealsUpcoming = [
    {
      title: 'Pasta and Parmasean',
      time: '1 hour',
      servings: 4,
    },
    {
      title: 'Pasta and Parmasean',
      time: '1 hour',
      servings: 4,
    },
    {
      title: 'Pasta and Parmasean',
      time: '1 hour',
      servings: 4,
    },
  ];

  return (
    <div className={classes['coming-up']}>
      <Swiper spaceBetween={150} slidesPerView={3}>
        {mealsUpcoming.map((meal) => {
          return (
            <SwiperSlide>
              <div className={classes['next-card']}>
                <h3>{meal.name}</h3>
                <div className={classes['next-card__image']}>
                  <img src={placeholder} alt="/" />
                </div>
                <div className={classes['next-meal__text']}>
                  <MealInfo icon={time} alt="Time" text={meal.time} />
                  <MealInfo icon={serves} alt="Time" text={meal.time} />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ComingUp;
