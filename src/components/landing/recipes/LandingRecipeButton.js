import classes from './LandingRecipeButton.module.css';

function LandingRecipeButton(props) {
  const label = props.meal.charAt(0).toUpperCase() + props.meal.substring(1);

  return (
    <button
      onClick={props.onClick}
      className={`${classes.button} ${
        props.active === props.meal ? classes.active : ''
      }`}
    >
      {label}
    </button>
  );
}

export default LandingRecipeButton;
