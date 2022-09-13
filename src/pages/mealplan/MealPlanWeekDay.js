import MealPlanWeekDayCard from './MealPlanWeekDayCard';

import classes from './styles/MealPlanWeekDay.module.css';

function MealPlanWeekDay({ day, meals }) {
  if (!meals) {
    return (
      <div className={`${classes.day} ${classes.none}`}>
        <h2>{day}</h2>
        <p className="body-large">No meals planned for {day}!</p>
      </div>
    );
  }

  const mealKeys = Object.keys(meals);
  const mealOrder = { Breakfast: 1, Lunch: 2, Dinner: 3 };

  const loadedMeals = mealKeys.map((meal) => (
    <MealPlanWeekDayCard
      key={meals[meal]?.value.id}
      id={meals[meal]?.value.id}
      meal={meal[0].toUpperCase() + meal.substring(1)}
      name={meals[meal]?.value.title}
      calories="???"
      carbs="???"
      fat="???"
      protein="???"
    />
  ));

  const sortedMeals = loadedMeals.sort((a, b) => mealOrder[a.props.meal] - mealOrder[b.props.meal]);

  return (
    <div className={classes.day}>
      <h2>{day}</h2>
      {sortedMeals}
    </div>
  );
}

export default MealPlanWeekDay;
