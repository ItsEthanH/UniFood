import React from 'react';

import classes from './ResultsPlaceholder.module.css';

function ResultsPlaceholder(props) {
  let text = 'Drag a recipe to add it to the meal plan';
  if (props.shoppingList) {
    text = 'Drag a recipe to add it to the shopping list';
  }

  return (
    <div className={classes.placeholder}>
      <p className={classes.plus}>+</p>
      <p className={classes.text}>{text}</p>
    </div>
  );
}

export default ResultsPlaceholder;
