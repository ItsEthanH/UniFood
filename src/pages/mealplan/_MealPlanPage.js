import { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';

import MealPlanOptions from './MealPlanOptions';
import MealPlanSidebar from './MealPlanSidebar';
import MealPlanDayView from './MealPlanDayView';
import MealPlanWeekView from './MealPlanWeekView';

import classes from './styles/MealPlanPage.module.css';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

function MealPlanPage() {
  const [isDayView, setIsDayView] = useState(true);

  const [breakfast, setBreakfast] = useState(null);
  const [lunch, setLunch] = useState(null);
  const [dinner, setDinner] = useState(null);

  const { sendRequest, response, isLoading, error } = useFetch();

  const dateObj = new Date();
  const isoDate = dateObj.toISOString().slice(0, 10);
  const requestPeriod = isDayView ? 'day' : 'week';

  useEffect(() => {
    sendRequest(`/mealplanner?period=${requestPeriod}&date=${isoDate}`);
  }, []);

  function changePageHandler() {
    setIsDayView((prevState) => !prevState);
  }

  const view =
    isDayView && response ? (
      <>
        <MealPlanSidebar styles={classes.sidebar} />
        <MealPlanDayView
          styles={classes.mealplan}
          breakfast={response.items.find((meal) => meal.position === 1)}
          lunch={response.items.find((meal) => meal.position === 2)}
          dinner={response.items.find((meal) => meal.position === 3)}
        />
      </>
    ) : (
      <MealPlanWeekView styles={classes.mealplan} />
    );

  const styles = `${classes.main}
  ${isDayView ? classes.day : classes.week}
  ${isLoading ? classes.loading : ''}`;

  return (
    <main className={styles}>
      {response && (
        <>
          <MealPlanOptions
            styles={classes.options}
            onPageChange={changePageHandler}
            isDayView={isDayView}
          />
          {view}
        </>
      )}
      {isLoading && <LoadingSpinner />}
      {error && <p>{error}</p>}
    </main>
  );
}

export default MealPlanPage;
