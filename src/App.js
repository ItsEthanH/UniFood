import './global.css';
import classes from './App.module.css';
import Header from './components/header/Header';
import React, { useState } from 'react';
import NavSiderbar from './components/navigation-sidebar/NavSidebar';
import Main from './components/ui/Main';

function App() {
  const [sidebarToggled, setSidebarToggled] = useState(false);

  function toggleSidebar() {
    setSidebarToggled((val) => !val);
  }

  return (
    <div className={classes.wrapper}>
      <Header toggleSidebar={toggleSidebar} />
      <NavSiderbar toggle={sidebarToggled} />
      <Main />
    </div>
  );
}

export default App;
