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

  switch (view) {
    case 'Dashboard':
      style = classes.dashboard;
      component = <Dashboard />;
      break;
    case 'Results':
      style = classes.results;
      component = <Results />;
      break;
    default:
      break;
  }

  return <main className={style}>{component}</main>;
}

export default Main;
