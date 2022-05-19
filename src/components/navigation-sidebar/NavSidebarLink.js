import React from 'react';

import classes from './NavSidebarLink.module.css';

function NavSiderbarLink(props) {
  return (
    <a
      href={props.href}
      className={`${classes.link} ${props.shown ? classes.show : ''}`}
    >
      <img src={props.icon} alt="icon" />
      <p>{props.text}</p>
    </a>
  );
}

export default NavSiderbarLink;
