import { Outlet, useLocation } from 'react-router-dom';

import classes from './styles/App.module.css';
import '../assets/styles/global-app.css';

import Header from '../components/header/Header';
import NavSiderbar from '../components/navigation-sidebar/NavSidebar';

function App() {
  const location = useLocation();
  let style;

  return (
    <div className={classes.wrapper}>
      <Header />
      <NavSiderbar />
      <Outlet />
    </div>
  );
}

export default App;
