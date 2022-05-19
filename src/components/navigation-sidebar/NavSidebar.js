import React, { useState } from 'react';

import NavSidebarLink from './NavSidebarLink';

import dashboardIcon from '../../assets/nav-sidebar/dashboard.svg';
import planIcon from '../../assets/nav-sidebar/plan.svg';
import favouriteIcon from '../../assets/nav-sidebar/favourite.svg';
import nutritionIcon from '../../assets/nav-sidebar/nutrition.svg';
import pantryIcon from '../../assets/nav-sidebar/pantry.svg';
import profileIcon from '../../assets/nav-sidebar/profile.svg';
import helpIcon from '../../assets/nav-sidebar/help.svg';
import logoutIcon from '../../assets/nav-sidebar/logout.svg';

import './NavSidebar.module.css';

function NavSiderbar() {
  const [sidebarShown, setSidebarShown] = useState(false);

  function showSidebar() {
    setSidebarShown(true);
  }

  function hideSidebar() {
    setSidebarShown(false);
  }

  return (
    <aside onMouseEnter={showSidebar} onMouseLeave={hideSidebar}>
      <nav className="nav-links">
        <NavSidebarLink
          shown={sidebarShown}
          icon={dashboardIcon}
          text="Dashboard"
          href=""
        />
        <NavSidebarLink
          shown={sidebarShown}
          icon={planIcon}
          text="Meal Plan"
          href=""
        />
        <NavSidebarLink
          shown={sidebarShown}
          icon={favouriteIcon}
          text="Favourites"
          href=""
        />
        <NavSidebarLink
          shown={sidebarShown}
          icon={nutritionIcon}
          text="Nutrition"
          href=""
        />
        <NavSidebarLink
          shown={sidebarShown}
          icon={pantryIcon}
          text="Pantry"
          href=""
        />
      </nav>
      <nav className="account-links">
        <NavSidebarLink
          shown={sidebarShown}
          icon={profileIcon}
          text="Profile"
          href=""
        />
        <NavSidebarLink
          shown={sidebarShown}
          icon={helpIcon}
          text="Help"
          href=""
        />
        <NavSidebarLink
          shown={sidebarShown}
          icon={logoutIcon}
          text="Log Out"
          href=""
        />
      </nav>
    </aside>
  );
}

export default NavSiderbar;
