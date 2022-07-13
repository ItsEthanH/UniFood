import React from 'react';
import ComingUp from './ComingUp';
import NextMeal from './NextMeal';
import Nutrition from './Nutrition';
import Welcome from './Welcome';

import classes from './styles/Dashboard.module.css';

function DashboardPage() {
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
