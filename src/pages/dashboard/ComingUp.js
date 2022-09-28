import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import DashboardCard from './DashboardCard';

import placeholder from '../../assets/placeholders/placeholder-dashboard.jpg';
import classes from './styles/ComingUp.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

function ComingUp() {
  const breakpoints = {
    1000: {
      slidesPerView: 2,
    },
    1300: {
      slidesPerView: 3,
    },
    2000: {
      slidesPerView: 4,
    },
  };

  return (
    <div className={classes['coming-up']}>
      <h3 className="body-large">Coming Up</h3>
      <Swiper
        style={{ height: '100%' }}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={2}
        breakpoints={breakpoints}
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
