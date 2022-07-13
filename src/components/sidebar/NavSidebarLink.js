import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './styles/NavSidebarLink.module.css';

function NavSiderbarLink(props) {
  return (
    <NavLink
      to={props.to}
      onClick={props.onClick}
      className={`${classes.link} ${props.shown ? classes.show : ''}`}
    >
      <img src={props.icon} alt="icon" />
      <p>{props.text}</p>
    </NavLink>
  );
}

export default NavSiderbarLink;
