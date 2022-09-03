import MealPlanDayCard from './MealPlanDayCard';

import classes from './styles/MealPlanDayView.module.css';

function MealPlanDayView(props) {
  const noRecipes = (
    <div className={classes.none}>
      <p className={classes['none-heading']}>No meal plan found!</p>
      <p className={classes['none-body']}>
        It seems there are no recipes found in your meal plan. Use the searchbar above to find your
        next meal!
      </p>
    </div>
  );

  return (
    <div className={`${classes.view} ${props.styles}`}>
      {noRecipes}
      {/* <MealPlanDayCard
        id={props.breakfast.value.id}
        meal="Breakfast"
        title={props.breakfast.value.title}
        calories={100}
        carbs={50}
        fat={20}
        protein={35}
        servings={props.breakfast.value.servings}
        time="45 minutes"
      />
      <MealPlanDayCard
        id={props.lunch.value.id}
        meal="Lunch"
        title={props.lunch.value.title}
        calories={100}
        carbs={50}
        fat={20}
        protein={35}
        servings={props.lunch.value.servings}
        time="45 minutes"
      />
      <MealPlanDayCard
        id={props.dinner.value.id}
        meal="Dinner"
        title={props.dinner.value.title}
        calories={100}
        carbs={50}
        fat={20}
        protein={35}
        servings={props.dinner.value.servings}
        time="45 minutes"
      /> */}
    </div>
  );
}

export default MealPlanDayView;
