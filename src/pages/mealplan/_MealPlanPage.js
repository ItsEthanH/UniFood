import MealPlanOptions from './MealPlanOptions';
import MealPlanWeekView from './MealPlanWeekView';

import classes from './styles/MealPlan.module.css';

function MealPlanPage() {
  return (
    <main className={classes.main}>
      <MealPlanOptions />
      <MealPlanWeekView />
    </main>
  );
}

export default MealPlanPage;
