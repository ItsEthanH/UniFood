import MealPlanWeekDayCard from './MealPlanWeekDayCard';

import classes from './styles/MealPlanWeekDay.module.css';

function MealPlanWeekDay({ day, meals }) {
  if (!meals) {
    return (
      <div className={classes.day}>
        <h2>{day}</h2>
        {sortedMeals}
      </div>
    );
  }

  const mealKeys = Object.keys(meals);
  const mealOrder = { Breakfast: 1, Lunch: 2, Dinner: 3 };

  const loadedMeals = mealKeys.map((meal) => {
    return (
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
    );
  });

  const sortedMeals = loadedMeals.sort((a, b) => mealOrder[a.props.meal] - mealOrder[b.props.meal]);

  return (
    <div className={classes.day}>
      <h2>{day}</h2>
      {sortedMeals}
    </div>
  );

  // return (
  //   <div className={classes.day}>
  //     <h2>{props.day}</h2>
  //     <ul>
  //       {props.meals.map((meal) => {
  //         return (
  //           <MealPlanWeekDayCard
  //             id={meal.id}
  //             type={meal.type}
  //             name={meal.name}
  //             calories={meal.calories}
  //             carbs={meal.carbs}
  //             fat={meal.fat}
  //             protein={meal.protein}
  //           />
  //         );
  //       })}
  //     </ul>
  //   </div>
  // );
}

export default MealPlanWeekDay;
