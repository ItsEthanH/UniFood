import React from 'react';

import classes from './RecipeInfoSubsection.module.css';

import SectionTitle from '../ui/SectionTitle';

function RecipeInfoSubsection(props) {
  return (
    <div className={classes.subsection}>
      <button
        onClick={() => {
          props.onClick(props.title);
        }}
      >
        <SectionTitle center={true}>{props.title}</SectionTitle>
        <p>{props.show ? '-' : '+'}</p>
      </button>
      <hr />
      <div
        className={`${classes.children} ${
          props.show ? classes.show : classes.hide
        }`}
      >
        {props.children}
      </div>
    </div>
  );
}

export default RecipeInfoSubsection;
