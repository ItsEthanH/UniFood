import React, { useContext } from 'react';

import PageContext from '../store/page-context';

import classes from './NavSidebarLink.module.css';

function NavSiderbarLink(props) {
  const pageCtx = useContext(PageContext);

  function changePage(event) {
    event.preventDefault();
    pageCtx.onChange(props.text);
  }

  return (
    <a
      href={props.href}
      className={`${classes.link} ${props.shown ? classes.show : ''}`}
      onClick={changePage}
    >
      <img src={props.icon} alt="icon" />
      <p>{props.text}</p>
    </a>
  );
}

export default NavSiderbarLink;
