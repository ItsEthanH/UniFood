import React from 'react';
import classes from './styles/SectionTitle.module.css';

function SectionTitle(props) {
  return (
    <h3
      className={`${classes.title} ${props.white ? classes.white : classes.black} ${
        props.center ? classes.center : ''
      }`}
    >
      {props.children}
    </h3>
  );
}

export default SectionTitle;
