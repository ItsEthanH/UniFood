import classes from './MealPlanWeekDayCard.module.css';

import placeholder from '../../assets/meal-plan/placeholder-breakfast.jpg';

function MealPlanWeekDayCard(props) {
  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <img src={placeholder} alt="placeholder" />
      </div>
      <div className={classes.text}>
        <h3>Breakfast</h3>
        <h4>Raisin and Walnut Granola</h4>
        <p>xxx calories</p>
        <div className={classes.macros}>
          <p>xxg carbs</p>
          <div className={classes.divider}></div>
          <p>xxg fat</p>
          <div className={classes.divider}></div>
          <p>xxg protein</p>
        </div>
      </div>
      <div className={classes.view}>
        <a href="/app/meal-plan">View Recipe</a>
      </div>
    </div>
  );
}

export default MealPlanWeekDayCard;

// preferred image for cards: 90x90
