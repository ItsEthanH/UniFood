import React from 'react';

import classes from './styles/RecipeInfoSubsection.module.css';

import SectionTitle from '../../components/ui/SectionTitle';

function RecipeInfoSubsection(props) {
  function clickHandler() {
    props.onClick(props.title);
  }

  return (
    <div className={classes.subsection}>
      <button onClick={clickHandler}>
        <SectionTitle center={true}>{props.title}</SectionTitle>
        <p>{props.show ? '-' : '+'}</p>
      </button>
      <hr />
      <div className={`${props.show ? classes.show : classes.hide}`}>{props.children}</div>
    </div>
  );
}

export default RecipeInfoSubsection;
