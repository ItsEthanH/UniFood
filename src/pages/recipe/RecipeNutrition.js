import { useState } from 'react';

import RecipeSection from './RecipeSection';
import RecipeInfoSubsection from './RecipeInfoSubsection';

import classes from './styles/RecipeNutrition.module.css';
import placeholderRecommendation from '../../assets/placeholders/placeholder-recommendation.jpg';

function RecipeNutrition() {
  const [nutritionShow, setNutritionShow] = useState(false);
  const [dietShow, setDietShow] = useState(false);
  const [recommendedShow, setRecommendedShow] = useState(false);

  function handleSubsectionClick(subsectionToShow) {
    setDietShow(false);
    setNutritionShow(false);
    setRecommendedShow(false);

    switch (subsectionToShow) {
      case 'Nutritional Information':
        setNutritionShow(true);
        break;
      case 'Dietary Information':
        setDietShow(true);
        break;
      case 'Recommended Recipes':
        setRecommendedShow(true);
        break;
    }
  }

  return (
    <RecipeSection info={true}>
      <RecipeInfoSubsection
        title={'Nutritional Information'}
        show={nutritionShow}
        onClick={handleSubsectionClick}
      >
        test
      </RecipeInfoSubsection>
      <RecipeInfoSubsection
        title={'Dietary Information'}
        show={dietShow}
        onClick={handleSubsectionClick}
      >
        test again
      </RecipeInfoSubsection>
      <RecipeInfoSubsection
        title={'Recommended Recipes'}
        show={recommendedShow}
        onClick={handleSubsectionClick}
      >
        <div className={classes.recommendation}>
          <img src={placeholderRecommendation} alt="" />
          <h4>Sample Recommendation</h4>
        </div>
        <div className={classes.recommendation}>
          <img src={placeholderRecommendation} alt="" />
          <h4>Sample Recommendation</h4>
        </div>
      </RecipeInfoSubsection>
    </RecipeSection>
  );
}

export default RecipeNutrition;
