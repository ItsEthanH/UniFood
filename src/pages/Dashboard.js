import React from 'react';
import ComingUp from '../components/dashboard/ComingUp';
import NextMeal from '../components/dashboard/NextMeal';
import Nutrition from '../components/dashboard/Nutrition';
import Welcome from '../components/dashboard/Welcome';

import classes from './styles/Dashboard.module.css';

function Dashboard() {
  return (
    <main className={classes.dashboard}>
      <Welcome />
      <NextMeal />
      <Nutrition />
      <ComingUp />
    </main>
  );
}

export default Dashboard;

// preferred image size for dashboard images = 636x393
