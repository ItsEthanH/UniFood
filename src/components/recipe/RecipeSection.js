import React from 'react';

import classes from './RecipeSection.module.css';

function RecipeSection(props) {
  return (
    <section className={`${classes.section} ${props.info ? classes.info : ''}`}>
      {props.children}
    </section>
  );
}

export default RecipeSection;
