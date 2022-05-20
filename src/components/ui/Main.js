import React from 'react';
import classes from './Main.module.css';

import Dashboard from '../dashboard/Dashboard';

function Main() {
  let content = <Dashboard />;
  return <main className={classes.dashboard}>{content}</main>;
}

export default Main;
