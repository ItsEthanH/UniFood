import React from 'react';

import classes from './ResultIcon.module.css';

function ResultIcon(props) {
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
    >
      <img src={props.icon} alt={props.tooltip} />
    </button>
  );
}

export default ResultIcon;
