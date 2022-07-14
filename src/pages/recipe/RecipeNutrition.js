import { useState } from 'react';

import RecipeSection from './RecipeSection';
import RecipeInfoSubsection from './RecipeInfoSubsection';

import classes from './styles/RecipeNutrition.module.css';
import placeholderRecommendation from '../../assets/placeholders/placeholder-recommendation.jpg';
import dairy from '../../assets/svgs/diets/dairy-free.svg';
import gluten from '../../assets/svgs/diets/gluten-free.svg';
import pescatarian from '../../assets/svgs/diets/pescatarian.svg';
import primal from '../../assets/svgs/diets/primal.svg';
import vegan from '../../assets/svgs/diets/vegan.svg';
import vegetarian from '../../assets/svgs/diets/vegetarian.svg';
import { useEffect } from 'react';

function RecipeNutrition(props) {
  const { diets } = props;

  const [dietShow, setDietShow] = useState(true);
  const [dietArray, setDietArray] = useState([]);
  const [nutritionShow, setNutritionShow] = useState(false);
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

  useEffect(() => {
    for (const diet of diets) {
      switch (diet) {
        case 'dairy free':
          setDietArray((prevDiets) => [...prevDiets, { type: 'Dairy Free', img: dairy }]);
          break;
        case 'gluten free':
          setDietArray((prevDiets) => [...prevDiets, { type: 'Gluten Free', img: gluten }]);
          break;
        case 'pescatarian':
          setDietArray((prevDiets) => [...prevDiets, { type: 'Pescatarian', img: pescatarian }]);
          break;
        case 'primal':
          setDietArray((prevDiets) => [...prevDiets, { type: 'Primal', img: primal }]);
          break;
        case 'paleo':
          setDietArray((prevDiets) => [...prevDiets, { type: 'Paleo', img: primal }]);
          break;
        case 'vegan':
          setDietArray((prevDiets) => [...prevDiets, { type: 'Vegan', img: vegan }]);
          break;
        default:
          break;
      }
      if (diet.includes('vegetarian')) {
        setDietArray((prevDiets) => [...prevDiets, { type: 'Vegetarian', img: vegetarian }]);
      }
    }
  }, []);

  console.log(diets);
  console.log(dietArray);

  return (
    <RecipeSection info={true}>
      <RecipeInfoSubsection
        title={'Dietary Information'}
        show={dietShow}
        onClick={handleSubsectionClick}
        diet
      >
        {dietArray.length === 0 && (
          <p className={classes.nodiet}>This recipe is not suitable for any special diets</p>
        )}
        {dietArray.length > 0 &&
          dietArray.map((diet) => (
            <div className={classes.diet}>
              <img src={diet.img} alt={diet.type} />
              <p>{diet.type}</p>
            </div>
          ))}
      </RecipeInfoSubsection>
      <RecipeInfoSubsection
        title={'Nutritional Information'}
        show={nutritionShow}
        onClick={handleSubsectionClick}
        classes={''}
      >
        test
      </RecipeInfoSubsection>

      <RecipeInfoSubsection
        title={'Recommended Recipes'}
        show={recommendedShow}
        onClick={handleSubsectionClick}
        classes={''}
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
