import React, { useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext';

import NavSidebarLink from './NavSidebarLink';

import dashboardIcon from '../../assets/svgs/dashboard.svg';
import planIcon from '../../assets/svgs/plan.svg';
import favouriteIcon from '../../assets/svgs/favourite.svg';
import nutritionIcon from '../../assets/svgs/nutrition.svg';
import pantryIcon from '../../assets/svgs/pantry.svg';
import profileIcon from '../../assets/svgs/profile.svg';
import helpIcon from '../../assets/svgs/help.svg';
import logoutIcon from '../../assets/svgs/logout.svg';

import classes from './NavSidebar.module.css';

function NavSiderbar() {
  const [sidebarShown, setSidebarShown] = useState(false);
  const authCtx = useContext(AuthContext);

  function showSidebar() {
    setSidebarShown(true);
  }

  function hideSidebar() {
    setSidebarShown(false);
  }

  function logoutHandler() {
    authCtx.logout();
  }

  return (
    <aside
      className={classes.navigation}
      onMouseEnter={showSidebar}
      onMouseLeave={hideSidebar}
    >
      <nav>
        <NavSidebarLink
          shown={sidebarShown}
          icon={dashboardIcon}
          text="Dashboard"
          to="/app"
        />
        <NavSidebarLink
          shown={sidebarShown}
          icon={planIcon}
          text="Meal Plan"
          to="/app/meal-plan"
        />
        <NavSidebarLink
          shown={sidebarShown}
          icon={favouriteIcon}
          text="Favourites"
          to=""
        />
        <NavSidebarLink
          shown={sidebarShown}
          icon={nutritionIcon}
          text="Nutrition"
          to=""
        />
        <NavSidebarLink
          shown={sidebarShown}
          icon={pantryIcon}
          text="Pantry"
          to=""
        />
      </nav>
      <nav>
        <NavSidebarLink
          shown={sidebarShown}
          icon={profileIcon}
          text="Profile"
          to=""
        />
        <NavSidebarLink
          shown={sidebarShown}
          icon={helpIcon}
          text="Help"
          to=""
        />
        <NavSidebarLink
          shown={sidebarShown}
          icon={logoutIcon}
          text="Log Out"
          onClick={logoutHandler}
          to="/"
        />
      </nav>
    </aside>
  );
}

export default NavSiderbar;
