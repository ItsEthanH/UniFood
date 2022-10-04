import classes from './styles/MealPlanOptions.module.css';

function MealPlanOptions({ isDayView, setIsDayView }) {
  function buttonClickHandler() {
    setIsDayView((prevState) => !prevState);
  }

  const buttonText = isDayView ? 'Day' : 'Week';
  return (
    <section className={classes.wrapper}>
      <div className={classes.options}>
        <button className={classes.active} href="/app/meal-plan" onClick={buttonClickHandler}>
          Current View: <span>{buttonText}</span>
        </button>
        <a href="/app/meal-plan">View Uncatagorised Meals</a>
        <a href="/app/meal-plan">Create New Plan</a>
        <a href="/app/meal-plan">Upload Plan</a>
      </div>
      <hr className="app-rule" />
    </section>
  );
}

export default MealPlanOptions;
