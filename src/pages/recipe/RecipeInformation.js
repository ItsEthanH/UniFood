import React, { useState } from 'react';

import RecipeSection from './RecipeSection';
import RecipeIcon from './RecipeIcon';
import PlanOverlay from '../search/PlanOverlay';

import classes from './styles/RecipeInformation.module.css';
import viewIcon from '../../assets/icons/view.png';
import favouriteIcon from '../../assets/icons/favourite.png';
import planIcon from '../../assets/icons/plan.png';
import cartIcon from '../../assets/icons/cart.png';

function RecipeInformation(props) {
  const [planOverlayShown, setPlanOverlayShown] = useState(false);

  function toggleMealPlanModal() {
    setPlanOverlayShown((prevState) => !prevState);
  }

  function submitMealPlan() {
    return;
  }

  return (
    <RecipeSection>
      {planOverlayShown && <PlanOverlay onClose={toggleMealPlanModal} onSubmit={submitMealPlan} />}

      <img className={classes.image} src={props.image} alt="" />
      <h3 className="body-large centered margin-1r0">{props.title}</h3>
      <div className={`${classes.stats} body margin-1r0`}>
        <p>
          {props.timeToCook}
          <span className="body-small color-primary"> mins</span>
        </p>
        <div className={classes.divider}></div>
        <p>
          ???<span className="body-small color-primary"> cal</span>
        </p>
        <div className={classes.divider}></div>
        <p>
          ??<span className="body-small color-primary"> /100</span>
        </p>
        <div className={classes.divider}></div>
        <p>
          {props.servings}
          <span className="body-small color-primary"> serves</span>
        </p>
      </div>
      <hr className={classes.hr} />
      <div className={`${classes.actions} margin-1r0`}>
        <RecipeIcon icon={viewIcon}></RecipeIcon>
        <RecipeIcon icon={favouriteIcon}></RecipeIcon>
        <RecipeIcon onClick={toggleMealPlanModal} icon={planIcon}></RecipeIcon>
        <RecipeIcon icon={cartIcon}></RecipeIcon>
      </div>
      <hr className={classes.hr} />
      <div className={`${classes.ingredients} margin-1r0 centered`}>
        <ul className="body-small">
          {props.ingredients.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    </RecipeSection>
  );
}

export default RecipeInformation;
