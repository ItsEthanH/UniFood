import classes from './styles/MealPlanOptions.module.css';

function MealPlanOptions(props) {
  function buttonClickHandler() {
    props.onPageChange();
  }

  const buttonText = props.isDayView ? 'Day' : 'Week';
  return (
    <section className={`${classes.options} ${props.styles}`}>
      <button className={classes.active} href="/app/meal-plan" onClick={buttonClickHandler}>
        Current View: <span className="color-primary">{buttonText}</span>
      </button>
      <a href="/app/meal-plan">View Uncatagorised Meals</a>
      <a href="/app/meal-plan">Create New Plan</a>
      <a href="/app/meal-plan">Upload Plan</a>
    </section>
  );
}

export default MealPlanOptions;
