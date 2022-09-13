import React from 'react';

import classes from './styles/RecipeInfoSubsection.module.css';

function RecipeInfoSubsection({ title, show, onClick, children, isDiet = false }) {
  function clickHandler() {
    onClick(title);
  }

  const childStyles = `${show ? classes.show : classes.hide} ${isDiet ? classes.diet : ''}`;
  return (
    <div className={classes.subsection}>
      <button onClick={clickHandler}>
        <h3 className="body-large margin-1r0 centered">{title}</h3>
        <p className="body-large">{show ? '-' : '+'}</p>
      </button>
      <hr className={classes.hr} />
      <div className={childStyles}>{children}</div>
    </div>
  );
}

export default RecipeInfoSubsection;
