import MealPlanDayCard from './MealPlanDayCard';

import classes from './styles/MealPlanDayView.module.css';

function MealPlanDayView({ meals }) {
  const breakfast = meals.breakfast;
  const lunch = meals.lunch;
  const dinner = meals.dinner;

  return (
    <div className={classes.view}>
      <MealPlanDayCard
        id={breakfast?.value.id}
        meal="Breakfast"
        title={breakfast?.value.title}
        calories="???"
        carbs="???"
        fat="???"
        protein={35}
        servings={breakfast?.value.servings}
        ingredients={breakfast?.value.ingredients}
        time="???"
      />
      <MealPlanDayCard
        id={lunch?.value.id}
        meal="Lunch"
        title={lunch?.value.title}
        calories="???"
        carbs="???"
        fat="???"
        protein="???"
        servings={lunch?.value.servings}
        ingredients={lunch?.value.ingredients}
        time="???"
      />
      <MealPlanDayCard
        id={dinner?.value.id}
        meal="Dinner"
        title={dinner?.value.title}
        calories="???"
        carbs="???"
        fat="???"
        protein="???"
        servings={dinner?.value.servings}
        ingredients={dinner?.value.ingredients}
        time="???"
      />
    </div>
  );
}

export default MealPlanDayView;
