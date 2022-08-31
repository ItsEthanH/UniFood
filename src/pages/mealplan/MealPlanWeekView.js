import useFetch from '../../hooks/useFetch';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import MealPlanWeekDay from './MealPlanWeekDay';

import classes from './styles/MealPlanWeekView.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect } from 'react';

function MealPlanWeekView() {
  const dateObj = new Date();
  const isoDate = dateObj.toISOString().slice(0, 10);

  const { sendRequest, response, isLoading, error } = useFetch();

  useEffect(() => {
    sendRequest(`/mealplanner?period=day&date=${isoDate}`, {});
  }, []);
  console.log(response);

  const noRecipes = (
    <div className={classes.none}>
      <p className={classes['none-heading']}>No meal plan found!</p>
      <p className={classes['none-body']}>
        It seems there are no recipes found in your meal plan. Use the searchbar above to find your
        next meal!
      </p>
    </div>
  );

  const carouselBreakpoints = {
    700: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1800: {
      slidesPerView: 4,
    },
  };

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
      {/* {response && response.days.length === 0 && noRecipes} */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={3.5}
        breakpoints={carouselBreakpoints}
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
