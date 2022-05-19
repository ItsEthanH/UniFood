import React from 'react';
import classes from './DashboardTitle.module.css';

function DashboardTitle(props) {
  return <h3 className={classes.title}>{props.children}</h3>;
}

export default DashboardTitle;
