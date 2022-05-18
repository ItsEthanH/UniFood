import React from 'react';

import NavSiderbarIcon from './NavSidebarIcon';

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
  return (
    <aside>
      <nav className="nav-links">
        <NavSiderbarIcon icon={dashboardIcon} />
        <NavSiderbarIcon icon={planIcon} />
        <NavSiderbarIcon icon={favouriteIcon} />
        <NavSiderbarIcon icon={nutritionIcon} />
        <NavSiderbarIcon icon={pantryIcon} />
      </nav>
      <nav className="account-links">
        <NavSiderbarIcon icon={profileIcon} />
        <NavSiderbarIcon icon={helpIcon} />
        <NavSiderbarIcon icon={logoutIcon} />
      </nav>
    </aside>
  );
}

export default NavSiderbar;
