import React from 'react';

import classes from './styles/ResultsPlaceholder.module.css';

function ResultsPlaceholder(props) {
  const { submitted } = props;

  let text = 'Drag a recipe to add it to the meal plan';

  if (props.shoppingList) {
    text = 'Drag a recipe to add it to the shopping list';
  }

  const defaultPlaceholder = (
    <>
      <p className={classes.plus}>+</p>
      <p className={classes.text}>{text}</p>
    </>
  );

  const successPlaceholder = (
    <>
      <p className={classes.plus}>✓</p>
      <p className={classes.text}>Your meals were successfully added to meal plan!</p>
    </>
  );

  return (
    <li className={classes.placeholder}>{submitted ? successPlaceholder : defaultPlaceholder}</li>
  );
}

export default ResultsPlaceholder;
