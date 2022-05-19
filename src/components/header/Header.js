import React from 'react';

import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';

import './Header.module.css';

function Header(props) {
  return (
    <header>
      <HeaderLogo />
      <HeaderSearch />
    </header>
  );
}

export default Header;
