import { useState } from 'react';

import LandingRecipeButton from './LandingRecipeButton';
import LandingRecipeCard from './LandingRecipeCard';

import classes from './styles/LandingRecipes.module.css';

function LandingRecipes() {
  let animationTimeout;
  const [animation, setAnimation] = useState(false);
  const [mealActive, setMealActive] = useState('breakfast');

  // card animation starts, so opacity is 0, content is changed, then the rest of the animation continues.
  // this stops the jittery-ness of animating the cards in their components
  function buttonClickHandler(meal) {
    clearTimeout(animationTimeout); // allows spamming of button clicks without breaking
    setAnimation(true);
    switch (meal) {
      case 'lunch':
        setMealActive('lunch');
        break;
      case 'dinner':
        setMealActive('dinner');
        break;
      case 'desert':
        setMealActive('desert');
        break;
      default:
        setMealActive('breakfast');
        break;
    }
    animationTimeout = setTimeout(() => {
      setAnimation(false);
    }, 750);
    // timout duration >= keyframes animation in css file
  }

  return (
    <section className={`${classes.recipes} landing-section`} id="recipes">
      <h3 className="heading centered">
        Some of our <span className="color-primary">delicious</span> recipes...
      </h3>
      <div className={classes.buttons}>
        <LandingRecipeButton
          meal="breakfast"
          active={mealActive}
          onClick={buttonClickHandler.bind(null, 'breakfast')}
        />
        <LandingRecipeButton
          meal="lunch"
          active={mealActive}
          onClick={buttonClickHandler.bind(null, 'lunch')}
        />
        <LandingRecipeButton
          meal="dinner"
          active={mealActive}
          onClick={buttonClickHandler.bind(null, 'dinner')}
        />
        <LandingRecipeButton
          meal="desert"
          active={mealActive}
          onClick={buttonClickHandler.bind(null, 'desert')}
        />
      </div>
      <div className={classes.cards}>
        <LandingRecipeCard animation={animation} index={0} meal={mealActive} />
        <LandingRecipeCard animation={animation} index={1} meal={mealActive} />
        <LandingRecipeCard animation={animation} index={2} meal={mealActive} />
      </div>
    </section>
  );
}

export default LandingRecipes;
