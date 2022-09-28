import { Link } from 'react-router-dom';

import classes from './styles/MealPlanWeekDayCard.module.css';

function MealPlanWeekDayCard(props) {
  if (!props.id) {
    return (
      <li className={`${classes.card} ${classes.none}`}>
        <h3 className="subheading centered">No {props.meal} Set!</h3>
        <p className="body-small centered margin-1r0">
          There is no {props.meal.toLowerCase()} set for today. Use the searchbar above to find a
          meal!
        </p>
      </li>
    );
  }

  return (
    <li className={classes.card}>
      <div className={classes.image}>
        <img src={`https://spoonacular.com/recipeImages/${props.id}-90x90.jpg`} alt="placeholder" />
      </div>
      <div className={classes.text}>
        <div className={classes['title-wrapper']}>
          <h3 className="body-bold">{props.meal}</h3>
          <Link className="body-small" to={`/app/recipe/${props.id}`}>
            View Recipe
          </Link>
        </div>
        <h4 className="body-small">{props.name}</h4>
        <p className="body-small">{props.calories} calories</p>
        <div className={classes.macros}>
          <p>{props.carbs}g carbs</p>
          <div className={classes.divider}></div>
          <p>{props.fat}g fat</p>
          <div className={classes.divider}></div>
          <p>{props.protein}g protein</p>
        </div>
      </div>
    </li>
  );
}

export default MealPlanWeekDayCard;

// preferred image for cards: 90x90
