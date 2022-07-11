import MealPlanWeekDay from './MealPlanWeekDay';

import classes from './MealPlanWeekView.module.css';

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
      <MealPlanWeekDay day="Monday" meals={DUMMY_MEAL_DAY} />
      <MealPlanWeekDay day="Tuesday" meals={DUMMY_MEAL_DAY} />
      <MealPlanWeekDay day="Wednesday" meals={DUMMY_MEAL_DAY} />
    </section>
  );
}

export default MealPlanWeekView;
