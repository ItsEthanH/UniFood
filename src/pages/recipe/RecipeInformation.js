import React, { useState } from 'react';

import SectionTitle from '../../components/ui/SectionTitle';
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
      <SectionTitle center={true}>{props.title}</SectionTitle>
      <div className={classes.stats}>
        <p>
          {props.timeToCook}
          <span> mins</span>
        </p>
        <div className={classes.divider}></div>
        <p>
          ???<span> cal</span>
        </p>
        <div className={classes.divider}></div>
        <p>
          ??<span> /100</span>
        </p>
        <div className={classes.divider}></div>
        <p>
          {props.servings}
          <span> serves</span>
        </p>
      </div>
      <hr />
      <div className={classes.actions}>
        <RecipeIcon icon={viewIcon}></RecipeIcon>
        <RecipeIcon icon={favouriteIcon}></RecipeIcon>
        <RecipeIcon onClick={toggleMealPlanModal} icon={planIcon}></RecipeIcon>
        <RecipeIcon icon={cartIcon}></RecipeIcon>
      </div>
      <hr />
      <div className={classes.ingredients}>
        <ul>
          {props.ingredients.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      </div>
    </RecipeSection>
  );
}

export default RecipeInformation;