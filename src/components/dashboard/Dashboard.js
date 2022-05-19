import React from 'react';
import ComingUp from './ComingUp';
import NextMeal from './NextMeal';
import Nutrition from './Nutrition';
import Welcome from './Welcome';

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
