import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import classes from './styles/App.module.css';

import Header from '../components/header/Header';
import NavSiderbar from '../components/navigation-sidebar/NavSidebar';

function App() {
  // sets the height to 100vh when the user logs in. this is reset in Landing.js for when the user logs out
  useEffect(() => {
    document.getElementById('root').style.height = '100vh';
  }, []);

  return (
    <div className={classes.wrapper}>
      <Header />
      <NavSiderbar />
      <Outlet />
    </div>
  );
}

export default App;
