import React from 'react';
import NextMeal from './NextMeal';
import Welcome from './Welcome';

function Dashboard() {
  return (
    <React.Fragment>
      <Welcome />
      <NextMeal />
    </React.Fragment>
  );
}

export default Dashboard;
