import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import RecipeIcon from '../recipe/RecipeIcon';
import PlanOverlay from './PlanOverlay';

import classes from './styles/ResultCard.module.css';
import viewIcon from '../../assets/icons/view.png';
import favouriteIcon from '../../assets/icons/favourite.png';
import planIcon from '../../assets/icons/plan.png';
import cartIcon from '../../assets/icons/cart.png';

function ResultCard(props) {
  const [tooltip, setTooltip] = useState('');
  const [planOverlayShown, setPlanOverlayShown] = useState(false);
  const navigate = useNavigate();

  function drag(event) {
    event.dataTransfer.setData('text/id', props.id);
    event.dataTransfer.setData('text/title', props.title);
    event.dataTransfer.setData('text/src', props.src);
    event.dataTransfer.effectAllowed = 'move';
  }

  function viewRecipe() {
    navigate('/app/recipe/' + props.id);
  }

  function toggleMealPlanModal() {
    setPlanOverlayShown((prevState) => !prevState);
  }

  function submitMealPlan() {
    return;
  }

  return (
    <li key={props.id} id={props.id} draggable="true" onDragStart={drag} className={classes.card}>
      {planOverlayShown && <PlanOverlay onClose={toggleMealPlanModal} onSubmit={submitMealPlan} />}
      <div className={classes.image}>
        <img src={props.src} alt="ALT" />
      </div>
      <div className="centered margin-1r">
        <h5 className="body-bold margin-1r0">{props.title}</h5>
        <div className={classes.buttons}>
          <RecipeIcon onClick={viewRecipe} setTooltip={setTooltip} tooltip="View" icon={viewIcon} />
          <RecipeIcon setTooltip={setTooltip} tooltip="Favourite" icon={favouriteIcon} />
          <RecipeIcon
            onClick={toggleMealPlanModal}
            setTooltip={setTooltip}
            tooltip="Meal Plan"
            icon={planIcon}
          />
          <RecipeIcon setTooltip={setTooltip} tooltip="Cart" icon={cartIcon} />
        </div>
        <div className="margin-1r0">
          <p className="body">{tooltip}</p>
        </div>
      </div>
    </li>
  );
}

export default ResultCard;
