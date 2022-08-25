import placeholder from '../../assets/placeholders/placeholder-recommendation.jpg';

import classes from './styles/MealPlanDayCard.module.css';

function MealPlanDayCard(props) {
  function buttonClickHandler() {
    return null;
  }

  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <img src={placeholder} alt="PLACEHOLDER" />
      </div>
      <div className={classes.text}>
        <h3>{props.meal}</h3>
        <h4>{props.title}</h4>
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
        <button onClick={buttonClickHandler}>View Recipe</button>
      </div>
    </div>
  );
}

export default MealPlanDayCard;
