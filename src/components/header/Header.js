import React from 'react';

import HeaderHamburger from './HeaderHamburger';
import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';

import './Header.module.css';

function Header() {
  return (
    <header>
      <HeaderHamburger />
      <HeaderLogo />
      <HeaderSearch />
    </header>
  );
}

export default Header;
