import React from 'react';

import DashboardTitle from './DashboardTitle';

import classes from './Nutrition.module.css';

function Nutrition() {
  return (
    <div className={classes['nutrition']}>
      <DashboardTitle>Nutrition</DashboardTitle>
    </div>
  );
}

export default Nutrition;
