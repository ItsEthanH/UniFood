import React from 'react';
import classes from './SectionTitle.module.css';

function SectionTitle(props) {
  return (
    <h3
      className={`${classes.title} ${
        props.white ? classes.white : classes.black
      }`}
    >
      {props.children}
    </h3>
  );
}

export default SectionTitle;