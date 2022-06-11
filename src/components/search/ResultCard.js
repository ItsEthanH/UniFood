import React, { useState, useContext } from 'react';

import RecipeIcon from '../recipe/RecipeIcon';

import viewIcon from '../../assets/ui/view.png';
import favouriteIcon from '../../assets/ui/favourite.png';
import planIcon from '../../assets/ui/plan.png';
import cartIcon from '../../assets/ui/cart.png';
import classes from './ResultCard.module.css';

function ResultCard(props) {
  const [tooltip, setTooltip] = useState('');

  function drag(event) {
    event.dataTransfer.setData('text/title', props.title);
    event.dataTransfer.setData('text/src', props.src);
    event.dataTransfer.effectAllowed = 'move';
  }

  function viewRecipe() {}

  return (
    <div draggable="true" onDragStart={drag} className={classes.card}>
      <div className={classes.image}>
        <img src={props.src} alt="ALT" />
      </div>
      <div className={classes.text}>
        <h5>{props.title}</h5>
        <hr />
        <div className={classes.buttons}>
          <RecipeIcon
            onClick={viewRecipe}
            setTooltip={setTooltip}
            tooltip="View"
            icon={viewIcon}
          />
          <RecipeIcon
            setTooltip={setTooltip}
            tooltip="Favourite"
            icon={favouriteIcon}
          />
          <RecipeIcon setTooltip={setTooltip} tooltip="Plan" icon={planIcon} />
          <RecipeIcon setTooltip={setTooltip} tooltip="Cart" icon={cartIcon} />
        </div>
        <hr />
        <div className={classes.tooltip}>
          <p>{tooltip}</p>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
