import recipes from './landingRecipeList';

import classes from './styles/LandingRecipeCard.module.css';

function LandingRecipeCard({ animation, index, meal }) {
  return (
    <div className={`${classes.card} ${animation ? classes.slideup : null}`}>
      <img src={recipes[meal][index].img} alt={recipes[meal][index].title} />
      <div className={classes.text}>
        <h3 className="body-bold">{recipes[meal][index].title}</h3>
        <p className={classes.description}>{recipes[meal][index].description}</p>
        <hr className="color-primary" />
        <p className="body-bold">{recipes[meal][index].time}</p>
        <p>£{recipes[meal][index].cost}/serving</p>
      </div>
    </div>
  );
}

export default LandingRecipeCard;
