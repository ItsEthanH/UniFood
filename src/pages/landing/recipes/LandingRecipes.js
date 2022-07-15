import { useState } from 'react';

import LandingSection from '../LandingSection';
import LandingTitle from '../../../pages/landing/LandingTitle';
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
    }, 1000);
    // timout duration >= keyframes animation in css file
  }

  return (
    <LandingSection id="recipes" styles={classes.desktop}>
      <LandingTitle styles={classes.title}>
        Some of our <span className="color-primary">delicious</span> recipes...
      </LandingTitle>
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
    </LandingSection>
  );
}

export default LandingRecipes;
