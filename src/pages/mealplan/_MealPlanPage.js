import { useState } from 'react';

import MealPlanOptions from './MealPlanOptions';
import MealPlanSidebar from './MealPlanSidebar';
import MealPlanDayView from './MealPlanDayView';
import MealPlanWeekView from './MealPlanWeekView';

import classes from './styles/MealPlanPage.module.css';

function MealPlanPage() {
  const [isDayView, setIsDayView] = useState(true);

  function changePageHandler() {
    setIsDayView((prevState) => !prevState);
  }

  const view = isDayView ? (
    <>
      <MealPlanSidebar styles={classes.sidebar} />
      <MealPlanDayView styles={classes.mealplan} />
    </>
  ) : (
    <MealPlanWeekView styles={classes.mealplan} />
  );

  const styles = `${classes.main} ${isDayView ? classes.day : classes.week}`;

  return (
    <main className={styles}>
      <MealPlanOptions
        styles={classes.options}
        onPageChange={changePageHandler}
        isDayView={isDayView}
      />
      {view}
    </main>
  );
}

export default MealPlanPage;
