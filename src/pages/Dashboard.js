import React from 'react';
import ComingUp from '../components/dashboard/ComingUp';
import NextMeal from '../components/dashboard/NextMeal';
import Nutrition from '../components/dashboard/Nutrition';
import Welcome from '../components/dashboard/Welcome';

function Dashboard() {
  return (
    <React.Fragment>
      <Welcome />
      <NextMeal />
      <Nutrition />
      <ComingUp />
    </React.Fragment>
  );
}

export default Dashboard;

// preferred image size for dashboard images = 636x393
