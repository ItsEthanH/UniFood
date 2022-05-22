import React from 'react';

import './global.css';
import classes from './App.module.css';

import Main from './components/ui/Main';
import Header from './components/header/Header';
import NavSiderbar from './components/navigation-sidebar/NavSidebar';
import { PageContextProvider } from './components/store/page-context';

function App() {
  return (
    <div className={classes.wrapper}>
      <PageContextProvider>
        <Header />
        <NavSiderbar />
        <Main />
      </PageContextProvider>
    </div>
  );
}

export default App;
