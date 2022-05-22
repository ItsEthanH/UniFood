import React, { useContext } from 'react';
import classes from './Main.module.css';

import Dashboard from '../dashboard/Dashboard';
import Results from '../search/Results';
import PageContext from '../store/page-context';

function Main() {
  const pageCtx = useContext(PageContext);
  let view = pageCtx.page;

  let style;
  let component;

  if (view === 'Dashboard') {
    style = classes.dashboard;
    component = <Dashboard />;
  } else if (view === 'Results') {
    style = classes.results;
    component = <Results />;
  }

  return <main className={style}>{component}</main>;
}

export default Main;
