import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

import RecipeSection from '../components/recipe/RecipeSection';
import SectionTitle from '../components/ui/SectionTitle';
import RecipeIcon from '../components/recipe/RecipeIcon';
import RecipeInfoSubsection from '../components/recipe/RecipeInfoSubsection';

import classes from './styles/Recipe.module.css';
import viewIcon from '../assets/ui/view.png';
import favouriteIcon from '../assets/ui/favourite.png';
import planIcon from '../assets/ui/plan.png';
import cartIcon from '../assets/ui/cart.png';

import placeholder2 from '../assets/search/placeholder-recipe.jpg';
import { useEffect } from 'react';

function Recipe(props) {
  const [nutritionShow, setNutritionShow] = useState(false);
  const [dietShow, setDietShow] = useState(false);
  const [recommendedShow, setRecommendedShow] = useState(false);

  const params = useParams();
  const endpoint = '/recipe?recipeID=' + params.recipeId;
  const { sendRequest, response, isLoading, error } = useFetch();

  useEffect(() => {
    sendRequest(endpoint, {}, 'RECIPE');
  }, []);

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

  if (!response) {
    return;
  }

  console.log(
    response.analyzedInstructions[0].steps.map((item) => console.log(item.step))
  );

  return (
    <main className={classes.recipe}>
      <RecipeSection>
        <img className={classes.image} src={response.image} alt="" />
        <SectionTitle center={true}>{response.title}</SectionTitle>
        <div className={classes.stats}>
          <p>
            {response.readyInMinutes}
            <span> mins</span>
          </p>
          <div className={classes.divider}></div>
          <p>
            ???<span> cal</span>
          </p>
          <div className={classes.divider}></div>
          <p>
            ??<span> /100</span>
          </p>
          <div className={classes.divider}></div>
          <p>
            {response.servings}
            <span> serves</span>
          </p>
        </div>
        <hr />
        <div className={classes.actions}>
          <RecipeIcon icon={viewIcon}></RecipeIcon>
          <RecipeIcon icon={favouriteIcon}></RecipeIcon>
          <RecipeIcon icon={planIcon}></RecipeIcon>
          <RecipeIcon icon={cartIcon}></RecipeIcon>
        </div>
        <hr />
        <div className={classes.ingredients}>
          <ul>
            {response.extendedIngredients.map((item) => (
              <li>{item.name}</li>
            ))}
          </ul>
        </div>
      </RecipeSection>

      <RecipeSection>
        <SectionTitle center={true}>Instructions</SectionTitle>
        <hr />
        <ol className={classes.instructions}>
          {response.analyzedInstructions[0].steps.map((instruction) => (
            <li>{instruction.step}</li>
          ))}
        </ol>
      </RecipeSection>

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
            <img src={placeholder2} alt="" />
            <h4>Sample Recommendation</h4>
          </div>
          <div className={classes.recommendation}>
            <img src={placeholder2} alt="" />
            <h4>Sample Recommendation</h4>
          </div>
        </RecipeInfoSubsection>
      </RecipeSection>
    </main>
  );
}

export default Recipe;
