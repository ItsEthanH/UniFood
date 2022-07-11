import MealPlanOptions from '../components/meal-plan/MealPlanOptions';
import MealPlanWeekView from '../components/meal-plan/MealPlanWeekView';

import classes from './styles/MealPlan.module.css';

function MealPlan() {
  return (
    <main className={classes.main}>
      <MealPlanOptions />
      <MealPlanWeekView />
    </main>
  );
}

export default MealPlan;
