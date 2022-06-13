import recipes from './landingRecipeList';

import classes from './LandingRecipeCard.module.css';

function LandingRecipeCard(props) {
  return (
    <div className={classes.card}>
      <img
        src={recipes[props.meal][props.index].img}
        alt={recipes[props.meal][props.index].title}
      />
      <div className={classes.text}>
        <h3>{recipes[props.meal][props.index].title}</h3>
        <p className={classes.description}>
          {recipes[props.meal][props.index].description}
        </p>
        <hr />
        <p className={classes.time}>{recipes[props.meal][props.index].time}</p>
        <p>£{recipes[props.meal][props.index].cost}/serving</p>
      </div>
    </div>
  );
}

export default LandingRecipeCard;
