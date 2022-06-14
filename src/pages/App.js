import { Outlet, useLocation } from 'react-router-dom';

import classes from './styles/App.module.css';
import '../assets/styles/global-app.css';

import Header from '../components/header/Header';
import NavSiderbar from '../components/navigation-sidebar/NavSidebar';

function App() {
  const location = useLocation();
  let style;

  switch (true) {
    case /\/app\/dashboard/.test(location.pathname):
      style = classes.dashboard;
      break;
    case /\/app\/results./.test(location.pathname):
      style = classes.results;
      break;
    case /\/app\/recipe./.test(location.pathname):
      style = classes.recipe;
      break;
  }

  return (
    <div className={classes.wrapper}>
      <Header />
      <NavSiderbar />
      <main className={`${style} ${classes.main}`}>
        <Outlet />
      </main>
    </div>
  );

  // return (
  //   <div className={classes.wrapper}>
  //     <Header />
  //     <NavSiderbar />
  //     <AppMain />
  //   </div>
  // );
}

export default App;
