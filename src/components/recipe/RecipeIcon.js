import React from 'react';

import classes from './RecipeIcon.module.css';

function RecipeIcon(props) {
  function showTooltip() {
    props.setTooltip(props.tooltip);
  }

  function hideTooltip() {
    props.setTooltip('');
  }

  return (
    <button
      href="#"
      className={classes.button}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onClick={props.onClick}
    >
      <img src={props.icon} alt={props.tooltip} />
    </button>
  );
}

export default RecipeIcon;
