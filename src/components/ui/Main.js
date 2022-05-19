import React from 'react';
import './Main.module.css';

import Dashboard from '../dashboard/Dashboard';

function Main() {
  let content = <Dashboard />;
  return <main>{content}</main>;
}

export default Main;
