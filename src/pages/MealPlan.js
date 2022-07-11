import MealPlanOptions from '../components/meal-plan/MealPlanOptions';
import MealPlanWeekDayCard from '../components/meal-plan/MealPlanWeekDayCard';

import classes from './styles/MealPlan.module.css';

function MealPlan() {
  return (
    <main className={classes.main}>
      <MealPlanOptions />
      <MealPlanWeekDayCard />
      <MealPlanWeekDayCard />
      <MealPlanWeekDayCard />
    </main>
  );
}

export default MealPlan;
