import classes from './styles/MealPlanDayView.module.css';

function MealPlanDayView(props) {
  return <div className={`${classes.view} ${props.styles}`}>meal plan</div>;
}

export default MealPlanDayView;
