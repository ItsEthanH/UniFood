import React, { useContext } from 'react';
import AuthContext from './context/AuthContext';

import './global.css';
import classes from './App.module.css';

import Main from './components/ui/Main';
import Header from './components/header/Header';
import NavSiderbar from './components/navigation-sidebar/NavSidebar';

function App() {
  // const ctx = useContext(AuthContext);

  return (
    <div className={classes.wrapper}>
      <Header />
      <NavSiderbar />
      <Main />
    </div>
  );
}

export default App;
