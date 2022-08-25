import MealPlanDayCard from './MealPlanDayCard';

import classes from './styles/MealPlanDayView.module.css';

function MealPlanDayView(props) {
  return (
    <div className={`${classes.view} ${props.styles}`}>
      <MealPlanDayCard
        meal="Breakfast"
        title="Raisin and Walnut Granola"
        calories={100}
        carbs={50}
        fat={20}
        protein={35}
        servings={2}
        time="45 minutes"
      />
      <MealPlanDayCard
        meal="Breakfast"
        title="Raisin and Walnut Granola"
        calories={100}
        carbs={50}
        fat={20}
        protein={35}
        servings={2}
        time="45 minutes"
      />
      <MealPlanDayCard
        meal="Breakfast"
        title="Raisin and Walnut Granola"
        calories={100}
        carbs={50}
        fat={20}
        protein={35}
        servings={2}
        time="45 minutes"
      />
    </div>
  );
}

export default MealPlanDayView;