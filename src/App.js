import React from 'react';

import './global.css';
import classes from './App.module.css';

import Main from './components/ui/Main';
import Header from './components/header/Header';
import NavSiderbar from './components/navigation-sidebar/NavSidebar';

function App() {
  return (
    <div className={classes.wrapper}>
      <Header />
      <NavSiderbar />
      <Main />
    </div>
  );
}

export default App;
