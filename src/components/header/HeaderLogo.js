import React from 'react';

import classes from './styles/HeaderLogo.module.css';

function HeaderLogo() {
  return (
    <h1 className={`${classes.logo} title`}>
      Uni<span className="color-primary">Food</span>
    </h1>
  );
}

export default HeaderLogo;
