import { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';

import MealPlanOptions from './MealPlanOptions';
import MealPlanSidebar from './MealPlanSidebar';
import MealPlanDayView from './MealPlanDayView';
import MealPlanWeekView from './MealPlanWeekView';

import orderByFirstDayOfWeek from '../../utils/orderByFirstDayOfWeek';

import classes from './styles/MealPlanPage.module.css';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

function MealPlanPage() {
  const [isDayView, setIsDayView] = useState(true);
  const { sendRequest, response, isLoading, error } = useFetch();

  const dateObj = new Date();
  const isoDate = dateObj.toISOString().slice(0, 10);

  useEffect(() => {
    sendRequest(`/mealplanner?period=week&date=${isoDate}`);
  }, []);

  const orderedDays = orderByFirstDayOfWeek(dateObj.getDay(), false);
  const todaysMeals = response && response.week[orderedDays[0]]?.meals;

  const dayView = response && isDayView && (
    <>
      <MealPlanSidebar />
      <MealPlanDayView meals={todaysMeals} />
    </>
  );

  const weekView = response && !isDayView && (
    <MealPlanWeekView meals={response.week} orderedDays={orderedDays} />
  );

  const pageStyles = `${classes.main} ${isDayView ? classes.day : classes.week}`;
  const planView = response && (
    <main className={pageStyles}>
      <MealPlanOptions isDayView={isDayView} setIsDayView={setIsDayView} />
      {dayView}
      {weekView}
    </main>
  );

  const loadingView = isLoading && <LoadingSpinner />;

  const errorView = error && (
    <main className={`${classes.error} body-large`}>
      <h3>Sorry! There was an error fetching your meal plan!</h3>
      <p>Error message: {error}</p>
    </main>
  );
  return (
    <>
      {planView}
      {loadingView}
      {errorView}
    </>
  );
}

export default MealPlanPage;
