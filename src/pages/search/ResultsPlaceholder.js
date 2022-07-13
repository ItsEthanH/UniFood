import React from 'react';

import classes from './styles/ResultsPlaceholder.module.css';

function ResultsPlaceholder(props) {
  let text = 'Drag a recipe to add it to the meal plan';
  if (props.shoppingList) {
    text = 'Drag a recipe to add it to the shopping list';
  }

  return (
    <li className={classes.placeholder}>
      <p className={classes.plus}>+</p>
      <p className={classes.text}>{text}</p>
    </li>
  );
}

export default ResultsPlaceholder;
