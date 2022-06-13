import classes from './styles/ApplicationPage.module.css';

import Main from '../components/ui/Main';
import Header from '../components/header/Header';
import NavSiderbar from '../components/navigation-sidebar/NavSidebar';

function ApplicationPage() {
  return (
    <div className={classes.wrapper}>
      <Header />
      <NavSiderbar />
      <Main />
    </div>
  );
}

export default ApplicationPage;
