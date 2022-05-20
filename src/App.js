import './global.css';
import classes from './App.module.css';
import Header from './components/header/Header';
import React from 'react';
import NavSiderbar from './components/navigation-sidebar/NavSidebar';
import Main from './components/ui/Main';

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
