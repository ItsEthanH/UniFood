import React, { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';

import ComingUp from './ComingUp';
import NextMeal from './NextMeal';
import Nutrition from './Nutrition';
import Welcome from './Welcome';

import classes from './styles/DashboardPage.module.css';

function DashboardPage() {
  const { sendRequest } = useFetch();

  useEffect(() => {
    sendRequest('/dashboard');
  }, []);

  return (
    <main className={classes.dashboard}>
      <Welcome />
      <NextMeal />
      <Nutrition />
      <ComingUp />
    </main>
  );
}

export default DashboardPage;

// preferred image size for dashboard images = 636x393
