import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import DashboardTitle from './DashboardTitle';
import DashboardCard from './DashboardCard';

import placeholder from '../../assets/dashboard/placeholder-meal.jpg';
import classes from './ComingUp.module.css';
import 'swiper/css/navigation';
import 'swiper/css';

function ComingUp() {
  return (
    <div className={classes['coming-up']}>
      <DashboardTitle>Coming Up</DashboardTitle>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
      >
        <SwiperSlide>
          <DashboardCard
            type="Breakfast"
            name="Velvet Victoria Sponge"
            src={placeholder}
            next={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <DashboardCard
            type="Breakfast"
            name="Velvet Victoria Sponge"
            src={placeholder}
            next={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <DashboardCard
            type="Breakfast"
            name="Velvet Victoria Sponge"
            src={placeholder}
            next={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <DashboardCard
            type="Breakfast"
            name="Velvet Victoria Sponge"
            src={placeholder}
            next={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <DashboardCard
            type="Breakfast"
            name="Velvet Victoria Sponge"
            src={placeholder}
            next={false}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ComingUp;
