import classes from './styles/ApplicationPage.module.css';

import AppMain from '../components/ui/AppMain';
import Header from '../components/header/Header';
import NavSiderbar from '../components/navigation-sidebar/NavSidebar';

function ApplicationPage() {
  return (
    <div className={classes.wrapper}>
      <Header />
      <NavSiderbar />
      <AppMain />
    </div>
  );
}

export default ApplicationPage;
