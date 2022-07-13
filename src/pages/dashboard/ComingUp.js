import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import SectionTitle from '../../components/ui/SectionTitle';
import DashboardCard from './DashboardCard';

import placeholder from '../../assets/placeholders/placeholder-dashboard.jpg';
import classes from './styles/ComingUp.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

function ComingUp() {
  return (
    <div className={classes['coming-up']}>
      <SectionTitle>Coming Up</SectionTitle>
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
