import { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './styles/MealPlanDayCard.module.css';

function MealPlanDayCard(props) {
  const [hover, setHover] = useState(false);

  function cardHoverHandler() {
    setHover(true);
  }

  function cardUnhoverHandler() {
    setHover(false);
  }

  // if there's no id, the meal is set to null. return the 'no meal set' card
  if (!props.id) {
    return (
      <div className={`${classes.card} ${classes.none}`}>
        <div className={classes.image}>
          <img
            src={`https://spoonacular.com/recipeImages/${props.id}-556x370.jpg`}
            alt="PLACEHOLDER"
          />
        </div>
        <div className={classes['no-meal-text']}>
          <h3>No {props.meal} Set!</h3>
          <p>
            There is no {props.meal.toLowerCase()} set for today. Use the searchbar above to find a
            meal!
          </p>
        </div>
      </div>
    );
  }

  const renderedIngredients = props.ingredients.map((item) => (
    <li>{item.name[0].toUpperCase() + item.name.substring(1)}</li>
  ));

  return (
    <div className={classes.card} onMouseEnter={cardHoverHandler} onMouseLeave={cardUnhoverHandler}>
      <div className={classes.image}>
        <img
          src={`https://spoonacular.com/recipeImages/${props.id}-556x370.jpg`}
          alt="PLACEHOLDER"
        />
      </div>

      <div className={classes.title}>
        <h3>{props.meal}</h3>
        <h4>{props.title}</h4>
      </div>

      <div className={classes.divider} />

      <div className={classes.nutrition}>
        <p>{props.calories} calories</p>
        <div className={classes.macros}>
          <p>{props.carbs}g carbs</p>
          <p>{props.fat}g fat</p>
          <p>{props.protein}g protein</p>
        </div>
      </div>

      <div className={classes.divider} />

      <div className={classes.actions}>
        <div className={classes.info}>
          <p>Servings:</p>
          <p>{props.servings}</p>
        </div>
        <div className={classes.info}>
          <p>Time:</p>
          <p>{props.time}</p>
        </div>
        <Link to={`/app/recipe/${props.id}`}>View Full Recipe</Link>
        {!hover && <p>Hover over the card to view ingredients</p>}
      </div>

      {hover && (
        <div className={classes.ingredients}>
          <ul>{renderedIngredients}</ul>
        </div>
      )}
    </div>
  );
}

export default MealPlanDayCard;
