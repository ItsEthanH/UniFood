import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import MealPlanWeekDay from './MealPlanWeekDay';

import classes from './styles/MealPlanWeekView.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

function MealPlanWeekView({ meals, orderedDays }) {
  const carouselBreakpoints = {
    700: {
      slidesPerView: 2,
    },
    1300: {
      slidesPerView: 3,
    },
    1800: {
      slidesPerView: 4,
    },
  };

  console.log(meals);
  console.log(orderedDays);

  const renderedDays = orderedDays.map((day) => {
    console.log(meals[day]);

    if (!meals[day]) return;

    return (
      <SwiperSlide>
        <MealPlanWeekDay day={day} meals={meals[day].meals} />
      </SwiperSlide>
    );
  });

  return (
    <section className={classes.view}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={3.5}
        breakpoints={carouselBreakpoints}
        navigation
      >
        {renderedDays}
      </Swiper>
    </section>
  );
}

export default MealPlanWeekView;
