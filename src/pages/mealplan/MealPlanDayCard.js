import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './styles/MealPlanDayCard.module.css';

function MealPlanDayCard(props) {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  function cardHoverHandler() {
    setHover(true);
  }

  function cardUnhoverHandler() {
    setHover(false);
  }

  function viewClickHandler() {
    navigate(`/app/recipe/${props.id}`);
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
        <div className={classes.view}></div>
        <button onClick={viewClickHandler}>View Full Recipe</button>
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
