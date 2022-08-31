import { useState } from 'react';

import placeholder from '../../assets/placeholders/placeholder-recommendation.jpg';

import classes from './styles/MealPlanDayCard.module.css';

function MealPlanDayCard(props) {
  const [hover, setHover] = useState(false);

  function buttonClickHandler() {
    return null;
  }

  function cardHoverHandler() {
    setHover(true);
  }

  function cardUnhoverHandler() {
    setHover(false);
    setStepNumber(0);
  }

  const DUMMY_INGREDIENTS = [
    'Lorem, ipsum.',
    'Ut, suscipit?',
    'In, quo?',
    'Repellendus, magni.',
    'Laudantium, officia.',
    'Qui, deleniti.',
    'Amet, delectus!',
    'Dignissimos, aut.',
    'Ad, consequuntur?',
    'Magni, quasi.',
  ];

  const renderedIngredients = DUMMY_INGREDIENTS.map((item) => <li>{item}</li>);

  return (
    <div className={classes.card} onMouseEnter={cardHoverHandler} onMouseLeave={cardUnhoverHandler}>
      <div className={classes.image}>
        <img src={placeholder} alt="PLACEHOLDER" />
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
        <div className={classes.view}></div>
        <button>View Full Recipe</button>
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
