import React from 'react';
import classes from './Main.module.css';

import Dashboard from '../dashboard/Dashboard';
import Results from '../search/Results';

function Main() {
  const DASHBOARD = 'dashboard';
  const RESULTS = 'results';

  let view = RESULTS;

  let style;
  let component;

  if (view === DASHBOARD) {
    style = classes.dashboard;
    component = <Dashboard />;
  } else if (view === RESULTS) {
    style = classes.results;
    component = <Results />;
  }

  return <main className={style}>{component}</main>;
}

export default Main;
