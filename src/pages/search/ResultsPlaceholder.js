import React from 'react';

import classes from './styles/ResultsPlaceholder.module.css';

function ResultsPlaceholder({ id, submitted }) {
  let text = 'Drag a recipe to add it to the meal plan';

  if (id === 'SHOPPING') {
    text = 'Drag a recipe to add it to the shopping list';
  }

  const defaultPlaceholder = (
    <>
      <p className="body-large color-white">+</p>
      <p className="body color-white">{text}</p>
    </>
  );

  const successPlaceholder = (
    <>
      <p className="body-large color-white">✓</p>
      <p className="body color-white">Your meals were successfully added to meal plan!</p>
    </>
  );

  return (
    <li className={classes.placeholder}>{submitted ? successPlaceholder : defaultPlaceholder}</li>
  );
}

export default ResultsPlaceholder;
