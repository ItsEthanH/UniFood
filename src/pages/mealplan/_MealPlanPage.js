import MealPlanOptions from './MealPlanOptions';
import MealPlanSidebar from './MealPlanSidebar';
import MealPlanDayView from './MealPlanDayView';
import MealPlanWeekView from './MealPlanWeekView';

import classes from './styles/MealPlanPage.module.css';

function MealPlanPage() {
  const isDayView = false;

  const styles = `${classes.main} ${isDayView ? classes.day : classes.week}`;

  return (
    <main className={styles}>
      <MealPlanOptions styles={classes.options} />
      <MealPlanSidebar styles={classes.sidebar} />
      <MealPlanDayView styles={classes.mealplan} />
    </main>
  );
}

export default MealPlanPage;
