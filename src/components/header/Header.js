import React from 'react';

import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';

import classes from './styles/Header.module.css';

function Header(props) {
  return (
    <header className={classes.header}>
      <HeaderLogo />
      <HeaderSearch />
    </header>
  );
}

export default Header;
