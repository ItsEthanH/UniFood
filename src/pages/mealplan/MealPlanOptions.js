import classes from './styles/MealPlanOptions.module.css';

function MealPlanOptions() {
  return (
    <section className={classes.options}>
      <a className={classes.active} href="/app/meal-plan">
        View Current Plan: <span className="color-primary">Week</span>
      </a>
      <a href="/app/meal-plan">View Uncatagorised Meals</a>
      <a href="/app/meal-plan">Create New Plan</a>
      <a href="/app/meal-plan">Upload Plan</a>
    </section>
  );
}

export default MealPlanOptions;
