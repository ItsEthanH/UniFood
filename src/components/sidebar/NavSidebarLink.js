import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './styles/NavSidebarLink.module.css';

function NavSiderbarLink(props) {
  function linkClickHandler(event) {
    props.onClick(event);
  }

  return (
    <NavLink
      to={props.to}
      onClick={linkClickHandler}
      className={`${classes.link} ${props.shown ? classes.show : ''}`}
    >
      <img src={props.icon} alt="icon" />
      <p>{props.text}</p>
    </NavLink>
  );
}

export default NavSiderbarLink;
