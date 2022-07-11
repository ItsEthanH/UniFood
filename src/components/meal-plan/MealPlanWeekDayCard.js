import { Link } from 'react-router-dom';

import classes from './MealPlanWeekDayCard.module.css';

function MealPlanWeekDayCard(props) {
  return (
    <li key={props.id} className={classes.card}>
      <div className={classes.image}>
        <img
          src={`https://spoonacular.com/recipeImages/${props.id}-90x90.jpg`}
          alt="placeholder"
        />
      </div>
      <div className={classes.text}>
        <h3>{props.type}</h3>
        <h4>{props.name}</h4>
        <p>{props.calories} calories</p>
        <div className={classes.macros}>
          <p>{props.carbs}g carbs</p>
          <div className={classes.divider}></div>
          <p>{props.fat}g fat</p>
          <div className={classes.divider}></div>
          <p>{props.protein}g protein</p>
        </div>
      </div>
      <div className={classes.view}>
        <Link to={`/app/recipe/${props.id}`}>View Recipe</Link>
      </div>
    </li>
  );
}

export default MealPlanWeekDayCard;

// preferred image for cards: 90x90