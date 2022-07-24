import MealPlanWeekDayCard from './MealPlanWeekDayCard';

import classes from './styles/MealPlanWeekDay.module.css';

function MealPlanWeekDay(props) {
  return (
    <div className={classes.day}>
      <h2>{props.day}</h2>
      <ul>
        {props.meals.map((meal) => {
          return (
            <MealPlanWeekDayCard
              id={meal.id}
              type={meal.type}
              name={meal.name}
              calories={meal.calories}
              carbs={meal.carbs}
              fat={meal.fat}
              protein={meal.protein}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default MealPlanWeekDay;
