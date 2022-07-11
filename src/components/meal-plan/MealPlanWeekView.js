import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import MealPlanWeekDay from './MealPlanWeekDay';

import classes from './MealPlanWeekView.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

function MealPlanWeekView() {
  const DUMMY_MEAL_DAY = [
    {
      id: '645175',
      type: 'Breakfast',
      name: 'Raisin and Walnut Granola',
      calories: 150,
      carbs: 50,
      fat: 10,
      protein: 15,
    },
    {
      id: '654119',
      type: 'Lunch',
      name: 'Orzo Salad With Vegetables and Herbs',
      calories: 550,
      carbs: 70,
      fat: 20,
      protein: 32,
    },
    {
      id: '650377',
      type: 'Dinner',
      name: 'Low Carb Brunch Burger',
      calories: 612,
      carbs: 38,
      fat: 30,
      protein: 46,
    },
  ];

  return (
    <section className={classes.view}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={3.5}
        navigation
      >
        <SwiperSlide>
          <MealPlanWeekDay day="Monday" meals={DUMMY_MEAL_DAY} />
        </SwiperSlide>
        <SwiperSlide>
          <MealPlanWeekDay day="Tuesday" meals={DUMMY_MEAL_DAY} />
        </SwiperSlide>
        <SwiperSlide>
          <MealPlanWeekDay day="Wednesday" meals={DUMMY_MEAL_DAY} />
        </SwiperSlide>
        <SwiperSlide>
          <MealPlanWeekDay day="Thursday" meals={DUMMY_MEAL_DAY} />
        </SwiperSlide>
        <SwiperSlide>
          <MealPlanWeekDay day="Friday" meals={DUMMY_MEAL_DAY} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default MealPlanWeekView;
